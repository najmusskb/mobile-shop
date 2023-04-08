import React from "react";
import pic1 from "../../image/pic1.png";

const Section4 = () => {
  return (
    <div>
      <div class="flex w-full">
        <div class="flex-1 w-32 border ">
          <img className="p-8 bg-white" src={pic1} alt="" />
        </div>

        <div class="flex-1  border">
          <div className="flex">
            <div>
              <img className="p-8 bg-white" src={pic1} alt="" />
            </div>
            <div>
              <img className="p-8 bg-white" src={pic1} alt="" />
            </div>
          </div>
          <div className="flex">
            <div>
              <img className="p-8 bg-white" src={pic1} alt="" />
            </div>
            <div>
              <img className="p-8 bg-white" src={pic1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
