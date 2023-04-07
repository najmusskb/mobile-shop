import React from "react";

import img1 from "./.././../image/levanten-mobilephones-hero-3-d..png";
import img2 from "./.././../image/levanten-mobilephones-hero-5-d.ong.webp";
import img3 from "./.././../image/levanten-mobilephones-hero-4-d.png";
import img4 from "./.././../image/levanten-mobilephones-hero-2-d.png";

import img5 from "./.././../image/img01.png";
import img6 from "./.././../image/img2.png";
import img7 from "./.././../image/img-03.jpg";
import img8 from "./.././../image/img-04.png";
import Tab from "../Tab/Tab";

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

      <h1 className="  text-5xl text-white"> Mobile </h1>

      <Tab></Tab>
    </div>
  );
};

export default Home;
