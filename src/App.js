
import './App.css';
import * as PropTypes from "prop-types";
import {BrowserRouter, Router} from "react-router-dom";
import {Routes, Route} from "react-router";

import GoogleMapTest from "./GoogleMapTest";
import Home from "./home/index.js";
import Profile from "./profile/index.js";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="container">
            <Routes>
                <Route path="/profile/*" element={<Profile/>}/>
                <Route path="/googleMapTest" element={<GoogleMapTest/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
