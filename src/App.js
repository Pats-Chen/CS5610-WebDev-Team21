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
            <div className="container">
            <Routes>
                <Route path="/googleMapTest" element={<GoogleMapTest/>}/>
                <Route path="/home" element={<HomeComponent/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
