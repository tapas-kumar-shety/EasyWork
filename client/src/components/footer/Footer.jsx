import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>blacksmith</span>
            <span>tailor</span>
            <span>Writing & Translation</span>
            <span>voice overs</span>
            <span>Programming & Tech</span>
            <span>Data</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
          </div>
          <div className="item">
            <h2>More</h2>
            <span>EasyWork Business</span>
            <span>EasyWork Pro</span>
            <span>EasyWork Logo Maker</span>
            <span>EasyWork Guides</span>
            <span>Get Inspired</span>
            <span>EasyWork Select</span>
            <span>ClearVoice</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>EasyWork</h2>
            <span>© EasyWork</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
