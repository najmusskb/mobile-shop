import React from "react";
import pic1 from "../../image/pic1.png";

const Tab3 = () => {
  return (
    <div>
      <div class="flex w-full">
        <div class="flex-1 h-full w-full border ">
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

export default Tab3;
