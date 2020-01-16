import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import "./App.css";
import Button_homepage from "./components/button/button_1.js";
import Title_homepage from "./components/title_homepage/title_homepage.js";
import Homepage from "./homepage/homepage.js";
import Registration from "./components/registration";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/register" component={Registration} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
