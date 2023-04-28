import React, {Component} from 'react';
import {Route, Routes, useNavigate, useLocation, Link} from 'react-router-dom';
import {create_plan} from "../services/travel-plan-service";
import './map.css';
import tempMarkers from "./tempMarker.svg";

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            searchQuery: '',
            createplan_btn: 'Create',
            searchResults: [],
            planName: '',
            planDescription: '',
            timeOfStay: '',
            tempMarker:null,
            Markers:[],
            userinfo: JSON.parse(localStorage.getItem('userinfo'))
        };

        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }

    componentDidMount() {
        const travel_list = localStorage.getItem("travel_list");
        if (travel_list) {
            let items_list = JSON.parse(travel_list)
            this.setState({
                searchResults: items_list,
            });
        }
        this.initMap();
        this.initAutocomplete();
    }

    addMarkers = () => {
        const { map, Markers, searchResults} = this.state;
        // console.log(map,Markers,searchResults);
        const newMarkers = searchResults.map((item) => (
            new window.google.maps.Marker({
                map,
                position: item.location,
                place: {
                    placeId: item.placeId,
                    location: item.location,
                }
            })
        ));
        this.setState({ Markers: [...Markers, ...newMarkers] });
    }
    initMap() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 42.3600825, lng: -71.0588801},
            zoom: 12,
        });
        this.setState({map});
        window.google.maps.event.addListenerOnce(map, 'tilesloaded', () => {
            // Call addMarkers function
            this.addMarkers();
        });
        this.setState({ map });
    }

    initAutocomplete() {
        this.autocomplete = new window.google.maps.places.Autocomplete(this.autocompleteInput.current);
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }


    handlePlaceSelect() {
        const place = this.autocomplete.getPlace();
        const {map, tempMarker} = this.state;

        if (!place) alert('please select a place from search results')
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            if(tempMarker) tempMarker.setMap(null);
            const marker = new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                icon: tempMarkers,
            });
            this.setState({searchQuery: place});
            this.setState({tempMarker: marker});
        } else {
            alert('No results found for this place');
        }
    }


    handleTimeOfStayChange = (event) => {
        this.setState({timeOfStay: parseInt(event.target.value, 10)});
    }

    handleAdd = () => {
        const {searchQuery, map, searchResults, timeOfStay,tempMarker,Markers} = this.state;
        if (!timeOfStay) {
            alert('Please enter the minutes of stay(must be a number).');
            return;
        }
        const request = {
            query: searchQuery,
            fields: ['name', 'geometry', 'formatted_address', 'place_id'],
        };
        // console.log(request.query);
        // console.log(request.query.geometry);
        // console.log(request.query.geometry.location.lng());
        // console.log(typeof (request.query.geometry.location.lat()));
        // console.log(request.query.place_id);

        const address = request.query.formatted_address;
        const placeId = request.query.place_id;
        const location =request.query.geometry.location;
        const name = request.query.name;
        if(tempMarker) tempMarker.setMap(null);

        map.panTo(location);
        map.setZoom(15);
        this.setState({
            searchResults: [...searchResults, {
                placeId,
                name: name,
                address,
                location: location,
                timeOfStay: this.state.timeOfStay,
            }],
        });
        localStorage.setItem("travel_list", JSON.stringify([...searchResults, {
            placeId,
            name: name,
            address,
            location: location,
            timeOfStay: this.state.timeOfStay,
        }]));
        const newMarker = new window.google.maps.Marker({
            map,
            position:location,
            place: {
                placeId: placeId,
                location:location,
            }
        });

        this.setState({Markers: [...Markers, newMarker]});
        // console.log(Markers);

    }

    handlePlanNameChange = (event) => {
        this.setState({planName: event.target.value});
    }

    handlePlanDescriptionChange = (event) => {
        this.setState({planDescription: event.target.value});
    }

    handleCreatePlan = async (type = false) => {
        const {searchResults, planName, planDescription} = this.state;

        if (searchResults.length === 0 || !planName || !planDescription) {
            alert('Please enter plan name, plan description, and at least one location to create a travel plan.');
            return;
        }
        const newPlan = {
            planName,
            planDescription,
            locations: searchResults,
            addnew: 1
        };

        let data = await create_plan(newPlan);
        if (data.data.planCreator) {
            localStorage.removeItem("travel_list")
            alert('Travel plan created successfully!');
            this.setState({
                searchQuery: '',
                searchResults: [],
                planName: '',
                planDescription: '',
                timeOfStay: '',
                tempMarker:null,
                Markers:[],
            });
        } else {
            alert(data.data.msg);
        }
    }

    handleRemove = async (index) => {
        const {searchResults, Markers} = this.state;
        const updatedResults = [...searchResults];
        const removePlace = updatedResults.splice(index, 1);
        this.setState({searchResults: updatedResults});
        // Update the local storage
        localStorage.setItem("travel_list", JSON.stringify(updatedResults));
        // remove marker
        Markers.forEach((marker) => {
            if (marker.place.placeId === removePlace[0].placeId) {
                marker.setMap(null);
            }
        });
    };

    renderAddList = () => {
        const {searchResults} = this.state;
        return (
            <ul>
                {searchResults.map((result, index) => (
                    <LocationItem
                        key={index}
                        result={result}
                        index={index}
                        onRemove={this.handleRemove}
                    />
                ))}
            </ul>
        );
    };

    render() {
        return (
            <div className="map-container">
                <Routes>
                    <Route index element={
                        <>
                            <div className="bg-light rounded-2">
                                <ConditionalMap/>
                                <h1 className="map-title ps-4">Create your travel plan!</h1>
                                <div className="search-container">
                                    <input
                                        style={{border: "2px solid black"}}
                                        type="text"
                                        onChange={this.handleChange}
                                        ref={this.autocompleteInput}
                                        placeholder="Add a location e.g. Boston"
                                    />
                                    <input
                                        style={{border: "2px solid black"}}
                                        type="text"
                                        placeholder="Minutes to stay (must be a number)"
                                        value={this.state.timeOfStay}
                                        onChange={this.handleTimeOfStayChange}
                                    />
                                    <button onClick={this.handleAdd}>Add</button>
                                </div>
                                <div id="map"></div>
                                <div className="search-container">
                                    <input
                                        style={{border: "2px solid black"}}
                                        type="text"
                                        placeholder="Enter your plan name"
                                        value={this.state.planName}
                                        onChange={this.handlePlanNameChange}
                                    />
                                    <input
                                        style={{border: "2px solid black"}}
                                        type="text"
                                        placeholder="Enter your plan description"
                                        value={this.state.planDescription}
                                        onChange={this.handlePlanDescriptionChange}
                                    />
                                    <button onClick={this.handleCreatePlan}> {this.state.createplan_btn} </button>
                                    {this.state.createplan_btn !== 'Create' && (
                                        <div>
                                            <button style={{marginLeft: "10px", backgroundColor: "#ff6600"}}> Create New
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <h3 className="map-title ps-4">List of places</h3>
                                <div className="list-container">{this.renderAddList()}</div>
                            </div>
                            <div>
                                <footer>
                                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                                </footer>
                            </div>
                        </>
                    }/>
                </Routes>
            </div>
        );
    }
}

function LocationItem({result, index, onRemove}) {
    useNavigate();
    return (
        <li key={index}>

            <div className="card-body">
                <div className="justify-content-between align-items-center">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-1 text-end">
                                    <i className="fa fa-map-marker fa-1x" style={{color: "seagreen"}}></i>
                                </div>
                                <div className="col-11">
                                    <span className="text-muted">{result.name}</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1 text-end">
                                    <i className="fa fa-location-arrow fa-1x" style={{color: "seagreen"}}></i>
                                </div>
                                <div className="col-11">
                                    <span className="text-muted">{result.address}</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1 text-end">
                                    <i className="fa fa-clock fa-1x" style={{color: "seagreen"}}></i>
                                </div>
                                <div className="col-11">
                                    <span className="text-muted">{result.timeOfStay} minutes</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="row">
                                <div className="text-end">
                                    <Link to={`/travelAdvisor/place_detail/${result.placeId}`} className="button-detail">Detail</Link>
                                </div>
                                <div className="text-end">
                                    <button className="button-remove" onClick={() => onRemove(index)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

function ConditionalMap() {
    const location = useLocation();
    return location.pathname === '/' ? <div id="map"></div> : null;
}

export default Map;