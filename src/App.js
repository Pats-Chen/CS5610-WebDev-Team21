import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import TravelAdvisor from "./travelAdvisor/index.js"
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CurrentUserContext from "./travelAdvisor/current-user-context";
import usersReducer from "./services/usersReducer";
function App() {
  return (
      <Provider store={configureStore({reducer: {users: usersReducer}})}>
          <CurrentUserContext>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/travelAdvisor/*" element={<TravelAdvisor/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
          </CurrentUserContext>
    </Provider>
  );
}

export default App;