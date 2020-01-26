import React, { Component } from 'react';
import "./navbar.css" 
import Logo from "../../assests/logo_navbar.png"
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div>
            <div className="navbar-container">
            <Link to="/"><div className="navbar-logo">
                <img src={Logo}/>
            </div></Link>
            <nav className="navbar_details">
                <a href="#" className="navbar_about">About</a>
                <a href="#" className="navbar_speakers">Speakers</a>
                <a href="#" className="navbar_blogs">Blogs</a>
                <a href="#" className="navbar_faq">FAQs</a>
                <a href="#" className="navbar_sponser">Sponsers</a>
                <a href="#" className="navbar_login">Login</a>
            </nav>
         </div>
        </div>
    )
}