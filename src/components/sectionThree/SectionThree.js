import React from "react";

import ss1 from "../../image/ss1.jpg";
import ss2 from "../../image/ss2.png";
import ss3 from "../../image/ss3.png";
import ss4 from "../../image/ss4.png";
import ss5 from "../../image/ss5.png";

const SectionThree = () => {
  return (
    <div>
      <div class="flex w-full">
        <div class="flex-1 w-32 border ">
          <img className="p-8 h-full bg-white" src={ss1} alt="" />
        </div>

        <div class="flex-1  border">
          <div className="flex">
            <div>
              <img className="p-8 bg-white" src={ss2} alt="" />
            </div>
            <div>
              <img className="p-8 bg-white" src={ss3} alt="" />
            </div>
          </div>
          <div className="flex">
            <div>
              <img className="p-8 bg-white" src={ss4} alt="" />
            </div>
            <div>
              <img className="p-8 bg-white" src={ss5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
