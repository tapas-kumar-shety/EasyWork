// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import "./Navbar.scss";

// function Navbar() {
//   const [active, setActive] = useState(false);
//   const [open, setOpen] = useState(false);

//   const { pathname } = useLocation();

//   const isActive = () => {
//     window.scrollY > 0 ? setActive(true) : setActive(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//     };
//   }, []);

//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await newRequest.post("/auth/logout");
//       localStorage.setItem("currentUser", null);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };


  
//   return (
//     <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
//       <div className="container">
//         <div className="logo">
//           <Link className="link" to="/">
//             <span className="text">Easy<span className="midtext">Work</span></span>
//           </Link>
//         </div>
//         <div className="links">
//           <span>About Us</span>
//           <span>Explore</span>
//           <span>English</span>
//           {!currentUser?.isSeller && <span>Want to Hire ?</span>}
//           {currentUser ? (
//             <div className="user" onClick={() => setOpen(!open)}>
//               <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
//               <span>{currentUser?.username}</span>
//               {open && (
//                 <div className="options">
//                   {currentUser.isSeller && (
//                     <>
//                       <Link className="link" to="/mygigs">
//                         Gigs
//                       </Link>
//                       <Link className="link" to="/add">
//                         Add New Gig
//                       </Link>
//                     </>
//                   )}
//                   <Link className="link" to="/orders">
//                     Orders
//                   </Link>
//                   <Link className="link" to="/messages">
//                     Messages
//                   </Link>
//                   <Link className="link" onClick={handleLogout}>
//                     Logout
//                   </Link>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <Link to="/login" className="link">Sign in</Link>
//               <Link className="link" to="/register">
//                 <button><span class="joinbtn">Join Us</span></button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//       {(active || pathname !== "/") && (
//         <>
//           <hr />
//           <div className="menu">
//             <Link className="link menuLink" to="/">
//               Programming & Tech
//             </Link>
//             <Link className="link menuLink" to="/">
//               Editing
//             </Link>
//             <Link className="link menuLink" to="/">
//               Art & Craft
//             </Link>
//             <Link className="link menuLink" to="/">
//               Legal Services
//             </Link>
//             <Link className="link menuLink" to="/">
//               Lifestyle & Wellness
//             </Link>
//             <Link className="link menuLink" to="/">
//               Business & Marketing
//             </Link>
//             <Link className="link menuLink" to="/">
//               Graphics & Animation
//             </Link>
//             <Link className="link menuLink" to="/">
//               Gaming
//             </Link>
//             <Link className="link menuLink" to="/">
//             Health & Medical
//             </Link>
//           </div>
//           <hr />
//         </>
//       )}
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Easy<span className="midtext">Work</span></span>
          </Link>
        </div>
        <div className="links">
          <span>About Us</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Want to Hire ?</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button><span class="joinbtn">Join Us</span></button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Editing
            </Link>
            <Link className="link menuLink" to="/">
              Art & Craft
            </Link>
            <Link className="link menuLink" to="/">
              Legal Services
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle & Wellness
            </Link>
            <Link className="link menuLink" to="/">
              Business & Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Graphics & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Gaming
            </Link>
            <Link className="link menuLink" to="/">
            Health & Medical
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
