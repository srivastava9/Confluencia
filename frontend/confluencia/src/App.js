import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Button_homepage from "./components/button/button_1.js";
import Title_homepage from "./components/title_homepage/title_homepage.js";
import Homepage from "./homepage/homepage.js";
import Registration from "./components/registration";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/register" component={Registration} />
      </div>
    </BrowserRouter>
  );
}

export default App;
