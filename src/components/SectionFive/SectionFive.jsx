import React from "react";
import "./Style.css";
import Bounce from "react-reveal/Bounce";
const SectionFive = () => {
  return (
    <div className="">
      <Bounce right>
        <h1 className="text-center text-5xl text-white  mt-10">
          Looking for something else?
        </h1>
      </Bounce>

      <div className="form-control items-center">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Search Keywords"
            className="input bg-white input-bordered"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="btn-group">
        <input
          type="radio"
          name="options"
          data-title="Galaxy S23 Ultra"
          className="btn"
        />
        <input
          type="radio"
          name="options"
          data-title="Galaxy Z Fold4"
          className="btn"
          checked
        />
        <input
          type="radio"
          name="options"
          data-title="QLED 8k"
          className="btn"
        />
        <input
          type="radio"
          name="options"
          data-title="IPhone"
          className="btn"
        />
        <input
          type="radio"
          name="options"
          data-title="QLED 8k"
          className="btn"
        />
        <input
          type="radio"
          name="options"
          data-title="Samsung"
          className="btn"
        />
      </div>
      <Bounce>
        <h5 className="pharagraph text-center">
          Key Features: <br />
          1. Drag and drop feature to customize without writing a code. <br />
          2.Can get access to icons and items that are specific to a platform or
          operating <br />
          3. Has a massive library of other assets and widgets you might need to
          design. <br />
          4.Allows to connect widgeted pages and preview them in real-time.{" "}
          <br />
          5.Offers real-time collaboration with teammates and clients.
        </h5>
      </Bounce>
    </div>
  );
};

export default SectionFive;
