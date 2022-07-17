import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            {/* <h5><a href="/about">About Us</a></h5> */}
            <h1>About Us</h1>
            {/* <h5><a href="/about">Services</a></h5>
            <h5><a href="/about">Teams</a></h5>
            <h5><a href="/about">FAQs</a></h5> */}

            <h5 className="list-unstyled">
              <li>We aim to help the client to achieve growth in their business.
              YDM Aims to grow with the evolving era of Digital Marketing and offer exceptional 
              service to clients while maintaining our reputation for delivering quality service, 
              unique work, and complete client satisfaction.</li>
            </h5>
            <h5><a href="/about">Services</a></h5>
            <h5><a href="/about">Teams</a></h5>
            <h5><a href="/about">FAQs</a></h5>
          </div>
          <div className="col">
            <h1>Contact Us</h1>
            <h4 className="list-unstyled">Address:
              <li>Bhosale Garden Rd, opposite to Teritree Resturant,</li>
              <li>Bhosale Nagar, Hadapsar,</li>
              <li>Pune, Maharashtra 411028</li>
              <li>Email: contact@yuvadigitalmedia.com</li>
              <li>Phone Number: 7972607449</li>
            </h4>
          </div>
          {/* Column2 */}
          {/* <div class="col-md-4 col-lg-3 footer-social wow fadeInUp"> */}
          <div className="col">
            <h1>Follow Us</h1>
            <ul className="list-unstyled" id="footer-socials">
              <li><a href="#"><i class="fa fa-facebook"  target="_blank"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" target="_blank"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus" target="_blank"></i></a></li>
            </ul>
          </div>

          {/* Column3 */}
          {/* <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div> */}
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Yuva Digital Media | All rights reserved |
            Terms Of Service | Privacy
              {/* <li className='nav-items'>Get Support</li>
              <li className='nav-items'>Refund Policy</li>
              <li className='nav-items'>Get In-Touch</li> */}
              {/* Get Support
              Refund Policy
              Get In-Touch */}
          </p>
          {/* <h5>
            <ul className="supp_poli">
              <li>Get Support</li>
              <li>Refund Policy</li>
              <li>Get In-Touch</li>
            </ul>
          </h5> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;