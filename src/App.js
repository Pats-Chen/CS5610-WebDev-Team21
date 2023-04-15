import './vendors/fontawesome/css/all.min.css';
import './App.css';
import React from "react";
import {Routes, Route, Navigate} from "react-router";
import {BrowserRouter, Router} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CurrentUserContext from "./travelAdvisor/current-user-context";
import usersReducer from "./services/usersReducer";
import TravelAdvisor from "./travelAdvisor/index.js"

const store = configureStore({reducer: { users: usersReducer}})


function App() {
  return (
      <Provider store={store}>
          <CurrentUserContext>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/travelAdvisor/*" element={<TravelAdvisor/>}/>
                        <Route path="/" element={<Navigate to="/travelAdvisor/home" replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
          </CurrentUserContext>
    </Provider>
  );
}

export default App;