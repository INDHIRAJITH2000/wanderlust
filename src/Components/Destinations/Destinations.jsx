import React from "react";
import "./Destinations.css";
import reactSvg from "../../assets/react.svg";
import img7732610 from "../../assets/7732610_5237.svg";
import paris from "../../assets/paris.jpg";
import newyork from "../../assets/newyork.jpg";
// import sydney from "../../assets/sydney.jpg"; // File does not exist
import toronto from "../../assets/toronto.jpg";
import tokyo from "../../assets/tokyo.jpg";

const destinationsData = [
  {
    name: "Paris",
    description: "The city of lights and love.",
    image: paris,
  },
  {
    name: "Tokyo",
    description: "A blend of tradition and technology.",
    image: tokyo,
  },
  {
    name: "New York",
    description: "The city that never sleeps.",
    image: newyork,
  },
  {
    name: "Sydney",
    description: "Home of the iconic Opera House.",
  image: toronto,
  },
];

const Destinations = () => {
  return (
    <div className="container py-4 mt-5" id="destinations">
            <h4 className="text-center desth4" >Gallery</h4>

      <div className="row justify-content-center g-4 mt-5">
        {destinationsData.map((dest, idx) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            key={idx}
          >
            <div
              className="destination-card"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="destination-overlay">
                <h2>{dest.name}</h2>
                <p>{dest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
