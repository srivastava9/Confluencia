import React, { Component } from 'react';
import "./navbar.css" 
import Logo from "../../assests/logo_navbar.png"

export default function Navbar(){
    return(
        <div>
            <div className="navbar-container">
            <div className="navbar-logo">
                <img src={Logo}/>
            </div>
            <nav className="navbar_details">
                <a className="navbar_about">About</a>
                <a className="navbar_speakers">Speakers</a>
                <a className="navbar_blogs">Blogs</a>
                <a className="navbar_faq">FAQs</a>
                <a className="navbar_sponser">Sponsers</a>
                <a className="navbar_login">Login</a>
            </nav>
         </div>
        </div>
    )
}