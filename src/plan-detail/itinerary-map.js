import React from "react";
import {GoogleMap, MarkerF, MarkerClusterer, InfoWindow} from "@react-google-maps/api";

const ItineraryMap = (displayPlan) => {

    const center = new window.google.maps.LatLng(displayPlan.plan.locations[0].location.lat,
                                                 displayPlan.plan.locations[0].location.lng);

    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container-detail">
            <MarkerClusterer children={
                () => displayPlan.plan.locations.map(location => (
                    <MarkerF key={location.placeId}
                             position={new window.google.maps.LatLng(location.location.lat, location.location.lng)}
                             onClick={
                                 () => {
                                     new window.google.maps.InfoWindow().open();
                                        console.log(location.name);
                                 }
                             }/>
                ))
            }/>
        </GoogleMap>
    )
};

export default ItineraryMap;