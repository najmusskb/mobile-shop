import React, { useState } from "react";
import "./style.css";
import img1 from "../../image/img01.png";
import img2 from "../../image/img2.png";
import img06 from "../../image/img-06.png";

const Tab = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="Tabs ">
      <div className="tabsList">
        <div
          className={`tabHead  ${index === 0 ? "active" : null} `}
          onClick={() => {
            setIndex(0);
          }}
        >
          tab1
        </div>
        <div
          className={`tabHead  ${index === 1 ? "active" : null} `}
          onClick={() => {
            setIndex(1);
          }}
        >
          tab2
        </div>
        <div
          className={`tabHead  ${index === 2 ? "active" : null} `}
          onClick={() => {
            setIndex(2);
          }}
        >
          tab3
        </div>
      </div>
      <div className="tabsContent" hidden={index != 0}>
        <img src={img1} alt="" />
      </div>
      <div className="tabsContent" hidden={index != 1}>
        <img src={img2} alt="" />
      </div>
      <div className="tabsContent" hidden={index != 2}>
        <img src={img06} alt="" />
      </div>
    </div>
  );
};

export default Tab;
