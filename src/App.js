import './App.css';
import './vendors/fontawesome/css/all.min.css';
import * as PropTypes from "prop-types";
import {BrowserRouter, Router} from "react-router-dom";
import {Routes, Route} from "react-router";

import GoogleMapTest from "./GoogleMapTest";
import HomeComponent from "./home/index.js";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeComponent/>}/>
                <Route path="/googleMapTest" element={<GoogleMapTest/>}/>
                <Route path="/home" element={<HomeComponent/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
