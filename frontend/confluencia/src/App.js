import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button_homepage from "./components/button/button_1.js";
import Title_homepage from "./components/title_homepage/title_homepage.js";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Homepage from "./homepage/homepage.js";
import Abhivyakti from "../src/components/Eventsall/abhivyakti";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Homepage}/>
          <Route path="/event" component={Abhivyakti}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
