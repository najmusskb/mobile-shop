import React, { useState } from "react";
import "./style.css";
import img1 from "../../image/img01.png";
import img2 from "../../image/img2.png";
import img06 from "../../image/img-06.png";
import img77 from "../../image/77.jpg";
import img88 from "../../image/unnamed.jpg";

const Tab = () => {
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
        <button
          className={`text-white btn btn-outline btn-accent tabHead  ${
            index === 3 ? "active" : null
          } `}
          onClick={() => {
            setIndex(3);
          }}
        >
          <span className="text-white">Galaxy Z Flip4</span>
        </button>
        <button
          className={`text-white tabHead btn btn-outline btn-accent ${
            index === 4 ? "active" : null
          } `}
          onClick={() => {
            setIndex(4);
          }}
        >
          <span className="text-white"> Galaxy Watch5</span>
        </button>
      </div>
      <div className="tabsContent text-center text-white " hidden={index != 0}>
        <h1 className="text-3xl font-bold mt-3">Galaxy Watch5</h1>
        <p className="mt-2">The connected power of Samsung Galaxy.</p>
        <img className="rounded-10 " src={img1} alt="" />
      </div>
      <div className="tabsContent text-white text-center" hidden={index != 1}>
        <h1 className="text-3xl font-bold mt-3">Galaxy Unpacked Highlight</h1>
        <p className="mt-2"> The connected power of Samsung Galaxy.</p>
        <img src={img2} alt="" />
      </div>
      <div className="tabsContent  text-center text-white" hidden={index != 2}>
        <h1 className="text-3xl font-bold mt-3">Galaxy Unpacked Highlight</h1>
        <p className="mt-2"> The connected power of Samsung Galaxy.</p>
        <img src={img06} alt="" />
      </div>
      <div className="tabsContent  text-center text-white" hidden={index != 3}>
        <h1 className="text-3xl font-bold mt-3">Galaxy Unpacked Highlight</h1>
        <p className="mt-2"> The connected power of Samsung Galaxy.</p>
        <img src={img77} alt="" />
      </div>
      <div className="tabsContent  text-center text-white" hidden={index != 4}>
        <h1 className="text-3xl font-bold mt-3">Galaxy Unpacked Highlight</h1>
        <p className="mt-2"> The connected power of Samsung Galaxy.</p>
        <img src={img88} alt="" />
      </div>
    </div>
  );
};

export default Tab;
