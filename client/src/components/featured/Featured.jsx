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
          <img src="./img/feat.png" alt="" />
        </div>
        <div className="left">
          <div className="fehe">
          <h1>  
            We elevate <span>neighbourhood enterprises</span>
          </h1>
          </div>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="img" />
              <input
                type="text"
                placeholder='get "your work done"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>card printing</button>
            <button>web developement</button>
            <button>carpnter</button>
            <button>wood work</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;



// import React, { useState } from "react";
// import "./Featured.scss";
// import { useNavigate } from "react-router-dom";

// function Featured() {
//   const [input, setInput] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     navigate(`/gigs?search=${input}`);
//   };
//   return (
//     <div className="featured">
//       <div className="container">
//         <div className="left">
//           <h1>
//           We elevate <span> neighbourhood enterprises</span>
//           </h1>
//           <div className="search">
//             <div className="searchInput">
//               <img src="./img/search.png" alt="" />
//               <input
//                 type="text"
//                 placeholder='Try "build custom model"'
//                 onChange={(e) => setInput(e.target.value)}
//               />
//             </div>
//             <button onClick={handleSubmit}>Search</button>
//           </div>
//           <div className="popular">
//             <span>Popular:</span>
//             <button>Mentorship program </button>
//             <button>Web Design</button>
//             <button>Fabric Stylist</button>
//             <button>AI Services</button>
//             <button>Custom Works Creator</button>
//             <button>Make Lyrics</button>
//           </div>
//         </div>
//         <div className="right">
//           <img src="./img/feat.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featured;


