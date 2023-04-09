import React from "react";
import video from "../../image/HOME_DM3_KV_Main-KV_1440x640_resizing_pc.mp4";
import "./Six.css";
import Zoom from "react-reveal/Zoom";

const Six = () => {
  return (
    <div className="w-full video ">
      <Zoom>
        {" "}
        <video autoPlay muted width="100%" height="300">
          <source src={video} type="video/mp4" />
        </video>
      </Zoom>
      ;
    </div>
  );
};

export default Six;
