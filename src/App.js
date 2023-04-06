
import './App.css';
import * as PropTypes from "prop-types";
import {BrowserRouter, Router} from "react-router-dom";
import {Routes, Route} from "react-router";

import GoogleMapTest from "./GoogleMapTest";
import PlanDetailComponent from "./plan_detail";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="container">
            <Routes>
                <Route path="/googleMapTest" element={<GoogleMapTest/>}/>
                <Route path="/plan-detail" element={<PlanDetailComponent/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
