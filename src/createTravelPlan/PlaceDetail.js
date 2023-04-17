import React, {useEffect, useState, useRef} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const PlaceDetail = () => {
    const {placeId} = useParams();
    const [placeDetails, setPlaceDetails] = useState(null);
    const mapElement = useRef(null);
    const map2 = useRef(null);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchPlaceDetails = async () => {
            const map = new window.google.maps.Map(document.createElement('div'));
            const service = new window.google.maps.places.PlacesService(map);
            const request = {
                placeId: placeId,
                fields: ['name', 'formatted_address', 'geometry', 'opening_hours', 'formatted_phone_number',
                    'international_phone_number', 'rating', 'website', 'photos', 'reviews', 'types'],
            };

            service.getDetails(request, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setPlaceDetails(place);

                    setTimeout(function () {
                        map2.current = new window.google.maps.Map(mapElement.current, {
                            center: place.geometry.location,
                            zoom: 15,
                        });
                        new window.google.maps.Marker({
                            position: place.geometry.location,
                            map: map2.current,
                            title: place.name,
                        });
                    }, 500)

                }
            });
        };

        fetchPlaceDetails();
    }, [placeId]);

    if (!placeDetails) {
        return <div>Loading...</div>;
    }

    const openingHours = placeDetails.opening_hours?.weekday_text || [];
    const photoUrl =
        placeDetails.photos && placeDetails.photos.length > 0
            ? placeDetails.photos[0].getUrl()
            : null;

    const lat = placeDetails.geometry.location.lat();
    const lng = placeDetails.geometry.location.lng();
    const reviews = placeDetails.reviews || [];

    return (
        <div>
            <style>
                #mymap {`height:200px`}
            </style>
            <button
                onClick={handleClick}
                style={{
                    backgroundColor: 'lightblue',
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '20px',
                }}
            >
                🔙 Back Create Travel Plan
            </button>
            <h1>{placeDetails.name}</h1>
            {photoUrl && (
                <img
                    src={photoUrl}
                    alt={placeDetails.name}
                    style={{width: '300px', height: 'auto'}}
                />
            )}
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
            <p>Address: {placeDetails.formatted_address}</p>
            <p>International Phone Number: {placeDetails.international_phone_number}</p>
            <p>Phone Number: {placeDetails.formatted_phone_number}</p>
            <p>Website: {placeDetails.website}</p>
            <p>Rating: {placeDetails.rating}</p>
            <h5>Types:</h5>
            <ul>
                {placeDetails.types.map((type, index) => (
                    <li key={index}>{type}</li>
                ))}
            </ul>
            <h5>Opening Hours:</h5>
            <ul>
                {openingHours.map((day, index) => (
                    <li key={index}>{day}</li>
                ))}
            </ul>
            <h5>Reviews:</h5>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>
                            <strong>{review.author_name}</strong> (
                            {review.rating} stars)
                        </p>
                        <p>{review.text}</p>
                        {review.relative_time_description && (
                            <p>
                                <small>
                                    Posted {review.relative_time_description}
                                </small>
                            </p>
                        )}
                    </li>
                ))}
            </ul>
            <h5>Map</h5>
            <div ref={mapElement} id="map" style={{height: '400px'}}></div>
        </div>
    );
};

export default PlaceDetail;