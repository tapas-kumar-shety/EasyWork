// Corrected and cleaned-up version of your Featured component

import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="right">
          <img src="./img/feat.png" alt="Featured" />
        </div>
        <div className="left">
          <div className="fehe">
            <h1>
              We elevate <span>neighbourhood enterprises</span>
            </h1>
          </div>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="Search" />
              <input
                type="text"
                placeholder='Get "your work done"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Card Printing</button>
            <button>Web Development</button>
            <button>Carpenter</button>
            <button>Wood Work</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
