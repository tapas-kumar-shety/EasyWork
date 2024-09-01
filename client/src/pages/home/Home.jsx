

import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
        <div className="item">
          <h1>Mentorship that works for you</h1>
           <img src="https://images.unsplash.com/photo-1512238972088-8acb84db0771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="item">
            <h1>A world of top freelance talent at your command</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Elite services tailored to fit every budget
            </div>
            <p>
              Find high-quality services at every price point.Only project-based pricing, anytime-anywhere.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Great results, quickly delivered
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="img" />
              Escrow payment protection
            </div>
            <p>
            Transparent pricing , escrow payment protection. Your payment is released only after your approval.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Mentorship Program.
            </div>
            <p>
            Get mentored or be a mentor , Join Today !
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 customer support
            </div>
            <p>
            Anytime you need it. We're here to help around the clock.
            </p>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Dive into the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="./img/lb.png"
                alt=""
              />
              <div className="line"></div>
              <span>Local Businesses</span>
            </div>
            <div className="item">
              <img
                src="./img/dm.png"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="./img/wr.png"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="./img/vid.png"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="./img/mus.png"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="./img/pt.png"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="./img/cons.png"
                alt=""
              />
              <div className="line"></div>
              <span>Consulting</span>
            </div>
            <div className="item">
              <img
                src="./img/ph.png"
                alt=""
              />
              <div className="line"></div>  
              <span>Photography</span>
            </div>
            <div className="item">
              <img
                src="./img/gd.png"
                alt=""
              />
              <div className="line"></div>
              <span>Graphic Design</span>
            </div>
            <div className="item">
              <img
                src="./img/teach.png"
                alt=""
              />
              <div className="line"></div>
              <span>Tutor</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              EasyWork - <i>Find Work, build Dreams</i>
            </h1>
            <h1>
            Empower your <i>team</i> with tools designed to streamline workflows .
            </h1>
            <p>
              Explore the world of freelancing with our exclusive tools.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience in ever
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore EasyWork Business</button>
          </div>
          <div className="item">
            <img
              src="./img/FL.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
