// import React from "react";
// import "./Home.scss";
// import Featured from "../../components/featured/Featured";
// import TrustedBy from "../../components/trustedBy/TrustedBy";
// import Slide from "../../components/slide/Slide";
// import CatCard from "../../components/catCard/CatCard";
// import ProjectCard from "../../components/projectCard/ProjectCard";
// import { cards, projects } from "../../data";

// function Home() {
//   return (
//     <div className="home">
//       <Featured />
//       <TrustedBy />
//       <Slide slidesToShow={5} arrowsScroll={5}>
//         {cards.map((card) => (
//           <CatCard key={card.id} card={card} />
//         ))}
//       </Slide>
//       <div className="features">
//         <div className="container">
//           <div className="item">
//             <h1>A whole world of freelance talent at your fingertips</h1>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               The best for every budget
//             </div>
//             <p>
//               Find high-quality services at every price point. No hourly rates,
//               just project-based pricing.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Quality work done quickly
//             </div>
//             <p>
//               Find the right freelancer to begin working on your project within
//               minutes.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Protected payments, every time
//             </div>
//             <p>
//               Always know what you'll pay upfront. Your payment isn't released
//               until you approve the work.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               24/7 support
//             </div>
//             <p>
//               Find high-quality services at every price point. No hourly rates,
//               just project-based pricing.
//             </p>
//           </div>
//           <div className="item">
//             <video src="./img/video.mp4" controls />
//           </div>
//         </div>
//       </div>
//       <div className="explore">
//         <div className="container">
//           <h1>Explore the marketplace</h1>
//           <div className="items">
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Graphics & Design</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
//                 alt=""
//               />
//               <div className="line"></div>

//               <span>Digital Marketing</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Writing & Translation</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Video & Animation</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Music & Audio</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Programming & Tech</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Business</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Lifestyle</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Data</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Photography</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="features dark">
//         <div className="container">
//           <div className="item">
//             <h1>
//               fiverr <i>business</i>
//             </h1>
//             <h1>
//               A business solution designed for <i>teams</i>
//             </h1>
//             <p>
//               Upgrade to a curated experience packed with tools and benefits,
//               dedicated to businesses
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Connect to freelancers with proven business experience
//             </div>

//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Get matched with the perfect talent by a customer success manager
//             </div>

//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Manage teamwork and boost productivity with one powerful workspace
//             </div>
//             <button>Explore Fiverr Business</button>
//           </div>
//           <div className="item">
//             <img
//               src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <Slide slidesToShow={4} arrowsScroll={4}>
//         {projects.map((card) => (
//           <ProjectCard key={card.id} card={card} />
//         ))}
//       </Slide>
//     </div>
//   );
// }

// export default Home;


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
            <video src="./img/video.mp4" controls />
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
              <img src="./img/check.png" alt="" />
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
          {/* <div className="item">
            <video src="./img/video.mp4" controls />
          </div> */}
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
