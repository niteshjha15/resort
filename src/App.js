import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import FrontImg from "./components/NavBar/FrontImg"
import Services from './components/Service/Services';
import MainRooms from './components/MainRooms/MainRooms';
import Footer from './components/Footer/Footer';
import FamilyDelux from './components/RoomDetail/FamilyDelux';
import Context from './Context';
import Rooms from "./components/Rooms/Rooms"
import RoomCompo from './components/RoomsPage/RoomCompo';
import Form from './components/Forms/Form';


function App() {
  return (
      <Context>
      <Router>
      <NavBar />
      <Route exact path = "/" component = {FrontImg} />
      <Route exact path = "/" component = {Services} />
      <Route exact path = "/" component = {Rooms} />
      <Route exact path = "/familydelux" component = {FamilyDelux} />
      <Route exact path = "/allrooms" component = {RoomCompo} />
      <Route exact path = "/forms" component = {Form} />
      <Footer />
    </Router>
    </Context>
  );
}

export default App;
