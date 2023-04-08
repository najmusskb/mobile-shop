import React from "react";

import pic1 from "../../image/four.jpg";

const Sectionfour = () => {
  return (
    <div>
      <h1 className="text-5xl text-center mt-10 mb-5 text-white">
        Explore #DoWhatYouCant
      </h1>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pic1} alt="/" className="w-120  rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              More Space to Keep Food Fresh
            </h1>
            <p className="py-6">
              All the room you need to cover wholesome meals for your family and
              friends
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionfour;
