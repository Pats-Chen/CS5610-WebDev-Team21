import React, {Component} from 'react';
import './map.css';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            searchQuery: '',
            searchResults: [],
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
        const {map, searchResults} = this.state;
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
            });
        } else {
            alert('No results found for this place');
        }
    }

    handleChange = (event) => {
        this.setState({searchQuery: event.target.value});
    }

    handleSearch = () => {
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

    handleRemove = (index) => {
        const {searchResults} = this.state;
        const updatedResults = [...searchResults];
        updatedResults.splice(index, 1);
        this.setState({searchResults: updatedResults});
    }

    renderSearchList = () => {
        const {searchResults} = this.state;
        return (
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>
                        {result.name} - {result.address}
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
                    <input style={{border: "2px solid black"}} type="text" onChange={this.handleChange}
                           ref={this.autocompleteInput}
                           placeholder="Search for a location e.g. Boston"/>
                    <button onClick={this.handleSearch}>Search</button>
                </div>
                <div id="map"></div>
                <h3 className="map-title">locations of interest</h3>
                <div className="list-container">{this.renderSearchList()}</div>
            </div>
        )
    }
}

export default Map;