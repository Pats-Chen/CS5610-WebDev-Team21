import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

function GoogleMapTest() {
    const REACT_APP_GOOGLE_MAPS_API_KEY = "AIzaSyB5lMFVzSYMXPvnX6VJedaG0ihHqlEjuR4";
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    const mapContainerStyle = { height: "400px", width: "100%" };
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} />
            </div>

            <GoogleMap zoom={10} center={center} mapContainerStyle={mapContainerStyle}>
                <Marker position={center} />
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </>
    );
}

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    async function handleSelect({ address }) {
        console.log(address)
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        console.log(address)
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
    }

    return (
        <div className="row">
            <label htmlFor="exampleDataList" className="form-label">
                Datalist example
            </label>
            <div className="col-8">
                <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                />
                <datalist id="datalistOptions">
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <option key={place_id} value={description} />
                        ))}
                </datalist>
            </div>
            <button className="btn btn-primary col-4" onClick={(event) => handleSelect({ address: value })}>
                add
            </button>
        </div>
    );
};

export default GoogleMapTest;