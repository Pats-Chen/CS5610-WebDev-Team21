import React, {useMemo} from "react";
import {GoogleMap, MarkerF} from "@react-google-maps/api";

const ItineraryMap = () => {
    const center = useMemo(() => ({lat:44, lng:-80}), []);
    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
            <MarkerF position={{lat:44, lng:-81}} />
        </GoogleMap>
    )
};

export default ItineraryMap;