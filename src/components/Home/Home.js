import React from "react";

import img1 from "./.././../image/levanten-mobilephones-hero-3-d..png";
import img2 from "./.././../image/levanten-mobilephones-hero-5-d.ong.webp";
import img3 from "./.././../image/levanten-mobilephones-hero-4-d.png";
import img4 from "./.././../image/levanten-mobilephones-hero-2-d.png";
import Tab from "../Tab/Tab";
import Tab2 from "../Tab2/Tab2";

import Sectionfour from "../Sectionfour/Sectionfour";
import SectionFive from "../SectionFive/SectionFive";
import Six from "../Six/Six";

const Home = () => {
  return (
    <div>
      {/* banner part --- section 01 */}
      <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} alt="/" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" alt="/" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} alt="/" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} alt="/" className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* section 02 */}
      <h1 className="mt-10 text-center text-5xl text-white"> Mobile Items </h1>
      <Tab></Tab>

      {/* section 03 */}
      <Tab2></Tab2>
      <Sectionfour></Sectionfour>
      <Six></Six>
      <SectionFive></SectionFive>

      {/* <SectionThree></SectionThree> */}
    </div>
  );
};

export default Home;
