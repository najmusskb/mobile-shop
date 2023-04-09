import React from "react";
import Reveal from "react-reveal/Reveal";
import pic1 from "../../image/themepic.png";
import "./Sectionfour.css";
import RubberBand from "react-reveal/RubberBand";
const Sectionfour = () => {
  return (
    <div>
      <RubberBand>
        <h1 className="text-5xl text-center mt-10 mb-5 text-white">
          Others Repairs
        </h1>
      </RubberBand>

      <div className="hero hero-n min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <Reveal left>
            <img
              src={pic1}
              alt="/"
              className="widthpic  rounded-lg shadow-2xl"
            />
          </Reveal>
          <Reveal right>
            <div className="others-repairs">
              <h1 className="text-5xl font-bold">Google Pixel</h1>
              <p className="py-5">
                1. Google Pixel 7 <br /> 2. Pro Google <br /> 3. Pixel 7 <br />
                4. Google Pixel 6 Pro <br />
                5. Google Pixel <br />
                6. Google Pixel 5
              </p>
              <button className="btn ">See More</button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Sectionfour;
