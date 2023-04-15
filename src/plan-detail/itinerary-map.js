import React, {useMemo} from "react";
import {GoogleMap, MarkerF} from "@react-google-maps/api";

const ItineraryMap = () => {
    const center = useMemo(() => ({lat:44, lng:-80}), []);
    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container-detail">
            <MarkerF position={center} />
            <MarkerF position={{lat:42, lng:-71}} />
        </GoogleMap>
    )
};

export default ItineraryMap;