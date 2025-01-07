/** @format */
import React, { Fragment, useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import EditLogModal from "./components/logs/EditLogModal";
import TechListModal from "./components/techs/TechListModal";
import AddTechModal from "./components/techs/AddTechModal";
import { Provider } from "react-redux";
import store from "./store";
import AddLogModal from "./components/logs/AddLogModal";
import AddBtn from "./components/layout/AddBtn";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
