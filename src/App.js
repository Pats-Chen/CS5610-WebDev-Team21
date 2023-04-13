
import './App.css';
import * as PropTypes from "prop-types";
import {BrowserRouter, Router} from "react-router-dom";
import {Routes, Route} from "react-router";

import GoogleMapTest from "./GoogleMapTest";
import Home from "./home/index.js";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/googleMapTest" element={<GoogleMapTest/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
