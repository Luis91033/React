/** @format */
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Navbar from "./Components/layout/Navbar";
import ContactState from "./context/contact/ContactState";
import "./App.css";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/About" Component={About} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
