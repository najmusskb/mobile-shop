import React from "react";

import ok1 from "../../image/okk1.png";
import ok2 from "../../image/ok2.png";
import ok3 from "../../image/ok3.png";
import ok4 from "../../image/ok4.png";
import ok5 from "../../image/ok5.png";

const Tab4 = () => {
  return (
    <div className="">
      <div class="flex h-50 w-full">
        <div class="flex-1 w-32 border ">
          <img className="p-8 h-full bg-white" src={ok1} alt="" />
        </div>

        <div class="flex-1  border">
          <div className="flex ">
            <div>
              <img className=" w-96 h-72 bg-white" src={ok2} alt="" />
            </div>
            <div>
              <img className="p-8 w-96 h-72      bg-white" src={ok3} alt="" />
            </div>
          </div>
          <div className="flex">
            <div>
              <img className="p-8 w-96 h-72 bg-white" src={ok4} alt="" />
            </div>
            <div>
              <img className="p-8 w-96 h-72 bg-white" src={ok5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab4;
