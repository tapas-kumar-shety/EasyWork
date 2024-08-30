import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Photography</span>
            <span>Programming & Tech</span>
            <span>AI Services</span>
            <span>Art & Craft</span>
            <span>Data & Analytics</span>
            <span>Creative Writing</span>
            <span>Graphic & Animation</span>
            <span>Business</span>
            <span>Lifestyle</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>About the Company</span>
            <span>Terms of Service</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Customer Support</span>
            <span>Register Grievance</span>
            <span>Sell on EasyWork</span>
            <span>Buy on EasyWork</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Community Standards</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>EasyWork</h2>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

