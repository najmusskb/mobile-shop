import React from "react";
import Lottie from "lottie-react";
import animation from "../../assest/animation-one.json";
import "./Booking.css";

const Booking = () => {
  return (
    <div>
      <h1 className="text-center">Booking A Mobile </h1>
      <div className="flex animation  lg:mt-0 h-30 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Lottie animationData={animation} loop={true}></Lottie>
      </div>{" "}
      <br />
      <br />
      <div>
        <form className="bg-white form">
          <div className="flex">
            <label className="input-group name">
              <span className="w-28">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-72"
              />
            </label>
            <label className="input-group email">
              <span className="w-28">Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered w-72 "
              />
            </label>
          </div>
          <br />
          <div className="flex">
            <label className="input-group name">
              <span className="w-28">Mobile</span>
              <input
                type="text"
                placeholder="+088XXXXXXX"
                className="input input-bordered w-72"
              />
            </label>
            <label className="input-group email">
              <span className="w-28">Location</span>
              <input
                type="text"
                placeholder="Mirpur,Dhaka"
                className="input input-bordered w-72"
              />
            </label>
          </div>
          <br />
          <div className="flex">
            <label className="input-group name">
              <span className="w-28">Address</span>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered w-72"
              />
            </label>
            <label className="input-group email ">
              <span className="w-28">PICKUP</span>
              <input
                type="text"
                placeholder="PICKUP Location"
                className="input input-bordered w-72"
              />
            </label>
          </div>{" "}
          <br />
          <div className="flex">
            <label className="input-group name">
              <span className="w-28">Date</span>
              <input
                type="date"
                placeholder="Enter Your Address"
                className="input input-bordered w-72"
              />
            </label>
            <label className="input-group email ">
              <span className="w-28">Hour</span>
              <input
                type="time"
                placeholder="PICKUP Location"
                className="input input-bordered w-72"
              />
            </label>
          </div>
          <br />
          <button className="btn buttonn  ">Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
