import React from "react";
import RubberBand from "react-reveal/RubberBand";
import "./style.css";

class Animation extends React.Component {
  render() {
    return (
      <div>
        <RubberBand>
          <h1 className="text-center Mobile  mt-5 text-5xl text-white">
            Mobile Items
          </h1>
        </RubberBand>
      </div>
    );
  }
}
export default Animation;
