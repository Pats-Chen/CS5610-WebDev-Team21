import './vendors/fontawesome/css/all.min.css';
import './App.css';
import * as PropTypes from "prop-types";
import {BrowserRouter, Router} from "react-router-dom";
import {Routes, Route} from "react-router";

import GoogleMapTest from "./GoogleMapTest";
import HomeComponent from "./home/index.js";
import Signup from "./login/register";
import Login from "./login/login";
import CreateTravelPlan from "./createTravelPlan";
import TravelAdvisor from "./travelAdvisor/index.js"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/travelAdvisor/*" element={<TravelAdvisor/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;