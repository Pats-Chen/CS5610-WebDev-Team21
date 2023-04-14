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

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/login/register" element={<Signup/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                    <Route path="/createTravelPlan" element={<CreateTravelPlan/>}/>
                    <Route path="/googleMapTest" element={<GoogleMapTest/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;