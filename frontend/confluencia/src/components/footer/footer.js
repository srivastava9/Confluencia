import React, { Component } from "react";
import "./footer.css";
import logo_only from "../../homepage/only logo.png";
import fullname from "../../homepage/CONFLUENCIA.png";
import DOMS from "../../homepage/DOMS_logo.png";
function Footer(props) {
  return (
    <div className="footer">
      <div className="column_1">
        <div className="full_logo">
          <div>
            <img className="logo_only" src={logo_only} />
          </div>
          <div>
            <img className="CONFLUENCIA" src={fullname} />
          </div>
        </div>
        <div>
          <img className="DOMS" src={DOMS}></img>
        </div>
      </div>
      <div>
        <div className="heading">Discover</div>
        <div>
          Events
          <br />
          Speakers
          <br />
          Blogs
          <br />
          Sponsors
          <br />
        </div>
      </div>
      <div>
        <div className="heading">Know</div>
        <div>
          FAQ
          <br />
          About
          <br />
        </div>
      </div>
      <div>
        <div className="heading">Social</div>
        <div>
          <a className="link" href="https://www.facebook.com/ConfluenciaOfficial/">
            Facebook</a>
          <br />
          <a href=""></a>Linkedin
          <br />
          Twitter
          <br />
          <a className="link" href="https://www.instagram.com/confluencia_iitr/">
            Instagram</a>
        </div>
      </div>
      <div className="column_5">
        <div className="heading">Contact</div>
        <div>
          Mohnish Yadav | +91-76074 06085
          <br />
          Vivek Samant | +91-79097 41638
          <br />
          Sandeep Bhadana | +91-76783 26372
          <br />
        </div>
      </div>
    </div>
  );
}
export default Footer;
