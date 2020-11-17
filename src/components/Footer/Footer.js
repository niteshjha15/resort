import React,{useState} from 'react'
import "./Footer.css"
import {FaFacebook, FaTwitter, FaYoutube,FaInstagram} from "react-icons/fa"

function Footer() {
    return (
        <div className = "container">
          <footer class="page-footer">
          <div>
            <div className="row">
              <div class="col">
                <h1 class="contact">Contact Us</h1>
                <p class="number">Resort number 556, Near Goa Beach, Goa 121013</p>
                <p>+91 9643700177</p>
                <p>011 498XXXX</p>
                <p>Email Us: beachresort@goa.com</p>
              </div>
              <div class="face">
                <h1 class="link">Links</h1>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"><FaFacebook style = {{fontSize: "2.5rem"}} /></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><FaTwitter style = {{fontSize: "2.5rem"}} /></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><FaYoutube style = {{fontSize: "2.5rem",color:"#FF0000"}} /></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><FaInstagram  style = {{fontSize: "2.5rem",color:"red"}} /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="copy">
            <div class="cont">
            © 2014 Copyright Nitesh
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer
