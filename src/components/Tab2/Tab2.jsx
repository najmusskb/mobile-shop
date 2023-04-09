import React, { useState } from "react";
import "./style.css";
import img1 from "../../image/img01.png";
import img2 from "../../image/img2.png";
import img06 from "../../image/img-06.png";
import img77 from "../../image/77.jpg";
import img88 from "../../image/unnamed.jpg";
import SectionThree from "../sectionThree/SectionThree";
import Tab3 from "../Tab3/Tab3";
import Tab4 from "../Tab4/Tab4";

const Tab2 = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="Tabs ">
      <div className="tabsList text-white">
        <button
          className={` text-white btn btn-outline btn-accent tabHead  ${
            index === 0 ? "active" : null
          } `}
          onClick={() => {
            setIndex(0);
          }}
        >
          <span className="text-white">Galaxy S23 Ultra</span>
        </button>

        <button
          className={`btn btn-outline btn-accent tabHead  ${
            index === 1 ? "active" : null
          } `}
          onClick={() => {
            setIndex(1);
          }}
        >
          <span className="text-white">Galaxy Unpacked Highlight</span>
        </button>
        <button
          className={` text-white btn btn-outline btn-accent tabHead  ${
            index === 2 ? "active" : null
          } `}
          onClick={() => {
            setIndex(2);
          }}
        >
          <span className="text-white">Galaxy Z Fold4</span>
        </button>
      </div>
      <div className="w-full" hidden={index != 0}>
        {/* ----------------- */}
        <SectionThree></SectionThree>
      </div>

      <div className="w-full" hidden={index != 1}>
        <Tab3></Tab3>
      </div>
      <div className="w-full" hidden={index != 2}>
        <Tab4></Tab4>
      </div>
    </div>
  );
};

export default Tab2;
