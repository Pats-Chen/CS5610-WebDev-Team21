import './App.css';
import {BrowserRouter, Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home/index.js";
import Login from "./login/login";
import CreateTravelPlan from "./createTravelPlan";
import Signup from "./login/register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route index
                               element={<Home/>}/>
                        <Route path="/login"
                               element={<Login/>}/>
                        <Route path="/createTravelPlan"
                               element={<CreateTravelPlan/>}/>
                        <Route path="/login/register"
                               element={<Signup/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;