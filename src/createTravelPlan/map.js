import React, {Component} from 'react';
import {Route, Routes, useNavigate, useLocation, Link} from 'react-router-dom';
import {create_plan, getLists} from "../services/travel-plan-service";
import './map.css';

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
            userinfo: JSON.parse(localStorage.getItem('userinfo'))
        };

        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }

    componentDidMount() {
        this.initMap();
        this.initAutocomplete();

        const travel_list = localStorage.getItem("travel_list");
        if (travel_list) {
            let items_list = JSON.parse(travel_list)
            this.setState({
                searchResults: items_list,
            });
        }
    }

    initMap() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 42.3600825, lng: -71.0588801},
            zoom: 12,
        });
        this.setState({map});
    }

    initAutocomplete() {
        const {map} = this.state;
        this.autocomplete = new window.google.maps.places.Autocomplete(this.autocompleteInput.current);
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    initData = async () => {
        if (this.state.userinfo) {
            let data = await getLists(this.state.userinfo._id);
            if (data.data.success) {

                this.state = {
                    searchResults: [],
                };
                let new_locations = [];
                data.data.data.locations.map(item => {

                    new_locations.push({placeId: item.placeId, name: item.name, address: item.address})
                })

                this.setState({
                    planName: data.data.data.planName,
                    planDescription: data.data.data.planDescription
                })

                console.log(new_locations)
                this.setState({
                    searchResults: new_locations,
                });

            } else {
                console.log(data)
                alert(data.data.msg);
            }
        }
    }

    handlePlaceSelect() {
        const place = this.autocomplete.getPlace();
        const {map, searchResults, autoSearch} = this.state;
        if (autoSearch) {
            if (place.geometry) {
                map.panTo(place.geometry.location);
                map.setZoom(15);
                const marker = new window.google.maps.Marker({
                    map,
                    position: place.geometry.location,
                });
                const address = place.formatted_address;
                const placeId = place.place_id;
                this.setState({
                    searchResults: [...searchResults, {
                        name: place.name, location: place.geometry.location, address, placeId
                    }],
                    autoSearch: false,
                });
            } else {
                alert('No results found for this place');
            }
        } else {
            if (place.geometry) {
                map.panTo(place.geometry.location);
                map.setZoom(15);
                const marker = new window.google.maps.Marker({
                    map,
                    position: place.geometry.location,
                });
            } else {
                alert('No results found for this place');
            }
        }
    }

    handleChange = (event) => {
        this.setState({searchQuery: event.target.value});
    }

    handleTimeOfStayChange = (event) => {
        this.setState({timeOfStay: parseInt(event.target.value, 10)});
    }

    handleAdd = () => {
        const {searchQuery, map, searchResults, timeOfStay} = this.state;

        if (!timeOfStay) {
            alert('Please enter the minutes of stay(must be a number).');
            return;
        }

        const request = {
            query: searchQuery,
            fields: ['name', 'geometry', 'formatted_address', 'place_id'],
        };

        const service = new window.google.maps.places.PlacesService(map);
        service.textSearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const place = results[0];
                map.panTo(place.geometry.location);
                map.setZoom(15);
                const marker = new window.google.maps.Marker({
                    map,
                    position: place.geometry.location,
                });
                const address = place.formatted_address;
                const placeId = place.place_id;
                this.setState({
                    searchResults: [...searchResults, {
                        placeId,
                        name: place.name,
                        address,
                        location: place.geometry.location,
                        timeOfStay: this.state.timeOfStay
                    }],
                });
                localStorage.setItem("travel_list", JSON.stringify([...searchResults, {
                    placeId,
                    name: place.name,
                    address,
                    location: place.geometry.location,
                    timeOfStay: this.state.timeOfStay
                }]));

            } else {
                alert('No results found for this search query');
            }
        });
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
                timeOfStay: ''
            });
        } else {
            console.log(data)
            alert(data.data.msg);
        }
    }

    handleRemove = async (index) => {
        const {searchResults} = this.state;
        const updatedResults = [...searchResults];
        updatedResults.splice(index, 1);
        this.setState({searchResults: updatedResults});

        // Update the local storage
        localStorage.setItem("travel_list", JSON.stringify(updatedResults));
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
                            <ConditionalMap/>
                            <h1 className="map-title">Create your travel plan!</h1>
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
                                        <button style={{marginLeft: "10px", backgroundColor: "#ff6600"}}
                                                onClick={() => {
                                                    this.handleCreatePlan(true)
                                                }}> Create New
                                        </button>
                                    </div>
                                )}
                            </div>
                            <h3 className="map-title">Your travel plan:</h3>
                            <div className="list-container">{this.renderAddList()}</div>
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
            {result.name} - Address: {result.address} - Time of Stay: {result.timeOfStay}
            <Link to={`/travelAdvisor/place_detail/${result.placeId}`} className={"button-detail"}>Detail</Link>
            <button className="button-remove" onClick={() => onRemove(index)}>
                Remove
            </button>
        </li>
    );
}

function ConditionalMap() {
    const location = useLocation();
    return location.pathname === '/' ? <div id="map"></div> : null;
}

export default Map;