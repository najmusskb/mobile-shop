import React from "react";
import "./Style.css";
import Six from "../Six/Six";
const SectionFive = () => {
  return (
    <div className="">
      <h1 className="text-center text-5xl text-white  mt-10">
        Looking for something else?
      </h1>
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
    </div>
  );
};

export default SectionFive;
