/** @format */
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alerts from "./Components/layout/Alerts";
import PrivateRoute from "./Components/routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./Components/layout/Navbar";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
                  />
                  <Route exact path="/About" Component={About} />
                  <Route exact path="/register" Component={Register} />
                  <Route exact path="/login" Component={Login} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
