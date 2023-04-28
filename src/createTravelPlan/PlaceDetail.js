import React, {useEffect, useState, useRef} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';

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

            <div className="container row bg-light pt-2 pb-2 m-0 rounded">
                <div className="col-2 bg-light text-center">
                    <button
                        onClick={handleClick}
                        className="btn btn-primary rounded-pill"
                    >Back
                    </button>
                </div>
                <div className="col-8 bg-light">
                    <div className="card container p-0 m-0">
                        <div>
                            {photoUrl && (
                                <img src={photoUrl}
                                     alt={placeDetails.name}
                                     className="card-img-top"
                                     style={{width: 'fit', height: 'auto'}}/>
                            )}
                        </div>
                        <div className="row container card-body">
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-map-marker fa-1x" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">{placeDetails.name}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-globe-asia fa-1x" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">{placeDetails.formatted_address}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-phone fa-1x" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">{placeDetails.formatted_phone_number}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-blender-phone fa-1x" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">{placeDetails.international_phone_number}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-wifi fa-1x" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">{placeDetails.website}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-compass" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">({lat}, {lng})</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-star" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">{placeDetails.rating}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-calendar" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">Opening hour</p>
                                    <ul className="text-muted mb-0">
                                        {openingHours.map((day, index) => (
                                            <li key={index}>{day}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-list" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">Place type</p>
                                    <ul className="text-muted mb-0">
                                        {placeDetails.types.map((type, index) => (
                                            <li key={index}>{type}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div className="col-3 text-end">
                                    <i className="fa fa-comments" style={{color: "seagreen"}}/>
                                </div>
                                <div className="col-9">
                                    <p className="text-muted mb-0">Comments</p>
                                    <ul className="text-muted mb-0">
                                        {reviews.map((review, index) => (
                                            <li key={index}>
                                                <span>
                                                    <span><strong>{review.author_name}</strong></span>
                                                    <span> ({review.rating}/5)</span>
                                                    {review.relative_time_description && (
                                                        <span><small> Posted {review.relative_time_description}</small></span>
                                                    )}
                                                </span>
                                                <p>{review.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div className="row flex-wrap">
                                <div ref={mapElement} id="map" style={{height: '400px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 bg-light"></div>
            </div>

            <div>
                <footer>
                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        </div>
    );
};

export default PlaceDetail;