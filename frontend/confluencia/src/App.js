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
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/register" component={Registration} />
        <Route path="/event" component={Abhivyakti} />
      </div>
    </BrowserRouter>
  );
}

export default App;
