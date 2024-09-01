import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">EasyWork > Digital Art ></span>
        <h1>AI-Generated Masterpieces</h1>
        <p>
          Discover the fusion of art and technology with our AI-powered artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Price Range</span>
            <input ref={minRef} type="number" placeholder="minimum" />
            <input ref={maxRef} type="number" placeholder="maximum" />
            <button onClick={apply}>Filter</button>
          </div>
          <div className="right">
            <span className="sortBy">Arrange by</span>
            <span className="sortType">
              {sort === "sales" ? "Most Popular" : "Latest Additions"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Latest Additions</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Most Popular</span>
                  )}
                  <span onClick={() => reSort("sales")}>Trending</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;