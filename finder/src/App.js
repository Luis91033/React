import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
    return (
      <GithubState>
        <AlertState>
          <Router>
          <div className='App'>
          <Navbar title ="Github Finder" icon = 'fab fa-github'/>
          <div className='container'>
            <Alert/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route exact path='/about' Component={About}/>
              <Route exact path='/user/:login' Component={User}/>
              <Route path= '*' Component={NotFound}/>
            </Routes>
          </div>
          </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}

export default App;
