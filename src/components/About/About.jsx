import React from "react";
import pic1 from "../../image/about1.jpg";
import pic2 from "../../image/about2.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl text-white text-center">
        ABOUT THE MOBILE STORE ONLINE
      </h1>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={pic1} alt="/" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Place & Details</h1>
            <p className="py-6">
              The Mobile Store is a successful and growing business at the heart
              of the mobile phone sector which serves diverse customers through
              our retail <br /> <br />
              <br /> For retail customers, Mobile Store Online has become a
              byword for mobiles, parts, accessories, services, and repairs
              through our four outlets in Loughton, Letchworth & Hitchin. <br />{" "}
              <br /> <br /> Mobile Store’s success to date has mainly been built
              on our dedication to providing excellent customer service,
              treating each customer as special and going the extra mile,
              whenever necessary, to find the right products and services.
            </p>
          </div>
        </div>
      </div>

      <div className="hero  min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pic2} alt="/" className="rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold"> Front Display</h1>
            <p className="py-6">
              <b>
                The Mobile Store has also developed a range of complimentary
                business-to-business services, including:
              </b>
              <br /> • website design and software development, <br />• the
              development of phone apps for business <br /> • marketing,
              e-marketing, social media strategy and digital marketing support{" "}
              <br /> • financial consultation and support for franchising,
              business acquisition, report writing and financial planning One
              common theme in this range of B2B activities is to help our
              clients to maintain and grow their existing customer base, also to
              attract new customers and find new market opportunities. Another
              theme is creativity. We look for innovative and dynamic ways of
              addressing business needs and developing markets.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-5xl text-white text-center">BUSINESS OVERVIEW</h1>
      <p>
        <b>Who we are?</b> <br /> <br /> Getting any device fixed is not as easy
        as it sounds and the choices that consumers have are limited, that is
        why we at the Mobile Store believe in quality and delivering the best
        repair service to customers across the UK. Mobile Store was established
        in the year 2004 and have been working on smart phone repairs, tablet
        repairs, computer repair and various other electronic device services
        since. Currently, the company has four stores that are situated in
        Luton, Hitchin, Letchworth and Loughton. We are the largest stockist of
        parts in the UK that means instant repairs and least hassle. Our stores
        offer a one-stop solution for the repairs of mobile phones, computers,
        consoles, tablets and TVs.
      </p>
      <br />
      <br />
      <p>
        <b>
          Here is why we are the most trusted Mobile Repair company in the UK?
        </b>
        <br />
        <br /> Do you know that mobile phone repairs are easy and reliable if
        you choose the right vendor? Our technicians have the skills and
        expertise to assist you with any issues you may be experiencing with
        your device. If you are looking for efficient and fast repair services,
        we are pleased to provide you quality service at the affordable price.
        We provide repairs for all make and models.
      </p>
    </div>
  );
};

export default About;
