import React from "react";
import logo from "./logo.svg";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import "./App.css";
import Button_homepage from "./components/button/button_1.js";
import Title_homepage from "./components/title_homepage/title_homepage.js";

import Homepage from "./homepage/homepage.js";
import Registration from "./components/registration";
import Abhivyakti from "./components/Eventsall/abhivyakti";
import Navbar from "./components/navbar/navbar";
import Revolution from "./components/Eventsall/revolution";
import Data_wars from "./components/Eventsall/data_wars";
import Environmentalist from "./components/Eventsall/environmentalist";
import Thinking_Big from "./components/Eventsall/data_wars";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/register" component={Registration} />
        <Route path="/events/Abhivyakti" component={Abhivyakti} />
        <Route path="/events/Revolution" component={Revolution} />
        <Route path="/events/Data-Wars" component={Data_wars} />
        <Route path="/events/Environmentalist" component={Environmentalist} />
        <Route path="/events/Thinkg-Big" component={Thinking_Big} />
      </BrowserRouter>
    </div>
  );
}

export default App;
