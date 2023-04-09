import React from "react";
import video from "../../image/HOME_DM3_KV_Main-KV_1440x640_resizing_pc.mp4";

const Six = () => {
  return (
    <div className="w-full ">
      <video width="100%" height="300" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Six;
