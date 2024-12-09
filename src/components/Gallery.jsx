import React, { useState } from "react"; // <-- Add useState here
import { Link, useLocation } from "react-router-dom";
import "./Gallery.css";
import I1 from "../assets/Gallery/Facility/FC1.jpeg";
import I2 from "../assets/Gallery/Facility/FC2.jpg";
import I3 from "../assets/Gallery/Facility/FC3.JPG";
import I4 from "../assets/Gallery/Facility/FC4.jpg";
import I5 from "../assets/Gallery/Facility/FC5.jpeg";
import I6 from "../assets/Gallery/Facility/FC6.jpg";
import Open_day from "../assets/Gallery/Openday_gallery.png";
import Esummit from "../assets/Gallery/ES_gallery.jpeg";
import Open_house from "../assets/Gallery/openhouse_gallery.jpeg";
import tranfinite from "../assets/Gallery/Transfinitte/TF1.jpg";
const Gallery = () => {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((clicked) => !clicked);
    console.log(clicked);
  };

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="gallery">
      <div className="head">Gallery</div>
      <div className="image">
        <div className="image-box">
          <img src={I1} alt="Event 1" />
        </div>
        <div className="image-box">
          <img src={I2} alt="Event 2" />
        </div>
        <div className="image-box">
          <img src={I3} alt="Event 3" />
        </div>
        <div className="image-box">
          <img src={I4} alt="Event 4" />
        </div>
        <div className="image-box">
          <img src={I5} alt="Event 5" />
        </div>
        <div className="image-box">
          <img src={I6} alt="Event 6" />
        </div>
      </div>
      <div className="gallery-container">
        <Link
          to="/open-house"
          onClick={handleClick}
          className="gallery-item"
          style={{ backgroundImage: `url(${Open_house})` }} // Replace with your image path
        >
          <div className="overlaytext">Open House Exhibition</div>
        </Link>

        <Link
          to="/e-summit"
          onClick={handleClick}
          className="gallery-item"
          style={{ backgroundImage: `url(${Esummit})` }} // Replace with your image path
        >
          <div className="overlaytext">E-Summit</div>
        </Link>

        <Link
          to="/transfinitte"
          onClick={handleClick}
          className="gallery-item"
          style={{ backgroundImage: `url(${tranfinite})` }} // Replace with your image path
        >
          <div className="overlaytext">Transfinitte</div>
        </Link>

        <Link
          to="/open-day"
          onClick={handleClick}
          className="gallery-item"
          style={{ backgroundImage: `url(${Open_day})` }} // Replace with your image path
        >
          <div className="overlaytext">Open Day</div>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
