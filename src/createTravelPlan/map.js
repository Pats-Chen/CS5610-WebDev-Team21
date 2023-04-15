import React, {Component} from 'react';
import './map.css';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            searchQuery: '',
            searchResults: [],
            planName: '',
            planDescription: '',
        };
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }

    componentDidMount() {
        this.initMap();
        this.initAutocomplete();
    }

    initMap() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.7749, lng: -122.4194},
            zoom: 12,
        });
        this.setState({map});
    }

    initAutocomplete() {
        const {map} = this.state;
        this.autocomplete = new window.google.maps.places.Autocomplete(this.autocompleteInput.current);
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
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
                this.setState({
                    searchResults: [...searchResults, {name: place.name, location: place.geometry.location, address}],
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

    handleAdd = () => {
        const {searchQuery, map, searchResults} = this.state;
        const request = {
            query: searchQuery,
            fields: ['name', 'geometry', 'formatted_address'],
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
                this.setState({
                    searchResults: [...searchResults, {name: place.name, location: place.geometry.location, address}],
                });
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

    handleCreatePlan = () => {
        const {searchResults, planName, planDescription} = this.state;
        if (searchResults.length === 0 || !planName || !planDescription) {
            alert('Please enter plan name, plan description, and at least one location to create a travel plan.');
            return;
        }

        const newPlan = {
            planName,
            planDescription,
            locations: searchResults
        };

        // send newPlan to server to save to database
        fetch('/api/create-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlan)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Travel plan created successfully!');
                    // clear form and reset state
                    this.setState({
                        searchQuery: '',
                        searchResults: [],
                        planName: '',
                        planDescription: ''
                    });
                } else {
                    alert('There was an error creating the travel plan. Please try again.');
                }
            })
            .catch(error => {
                console.error(error);
                alert('There was an error creating the travel plan. Please try again.');
            });
    }

    handleRemove = (index) => {
        const {searchResults} = this.state;
        const updatedResults = [...searchResults];
        updatedResults.splice(index, 1);
        this.setState({searchResults: updatedResults});
    }

    renderAddList = () => {
        const {searchResults} = this.state;
        return (
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>
                        {result.name} - Address: {result.address}
                        <button onClick={() => this.handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="map-container">
                <h1 className="map-title">Create your travel plan!</h1>
                <div className="search-container">
                    <input
                        style={{border: "2px solid black"}}
                        type="text"
                        onChange={this.handleChange}
                        ref={this.autocompleteInput}
                        placeholder="Add a location e.g. Boston"
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
                    <button onClick={this.handleCreatePlan}>Create</button>
                </div>
                <h3 className="map-title">Your travel plan:</h3>
                <div className="list-container">{this.renderAddList()}</div>
            </div>
        );
    }
}

export default Map;