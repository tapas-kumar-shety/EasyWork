import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning Digital Portrait</td>
            <td>49.<sup>99</sup></td>
            <td>23</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai-Generated Landscape Art</td>
            <td>90.<sup>99</sup></td>
            <td>31</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270364/pexels-photo-270364.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High-Quality Digital Painting</td>
            <td>69.<sup>99</sup></td>
            <td>46</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270359/pexels-photo-270359.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustrative Hyper-Realistic Art</td>
            <td>109.<sup>99</sup></td>
            <td>29</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270349/pexels-photo-270349.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original Ai-Generated Digital Masterpiece</td>
            <td>59.<sup>99</sup></td>
            <td>38</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270344/pexels-photo-270344.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text-Based Ai-Generated Artwork</td>
            <td>100.<sup>99</sup></td>
            <td>19</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;