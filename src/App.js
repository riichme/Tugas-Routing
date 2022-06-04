import React from 'react';
import './App.css'
import CardDetail from './pages/cardDetail'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Favorite from './pages/Favorite'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
    return (
      <>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/detail/:id">
            <CardDetail></CardDetail>
          </Route>
          <Route path="/myFavorite">
            <Favorite></Favorite>
          </Route>
          <Route exact path="/" >
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </>
    );
}


export default App;
