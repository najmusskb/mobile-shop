import "./Style.css";
const Product = () => {
  const fakedata = [
    {
      id: "1",
      price: 720.5,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-pro-1.jpg",
      name: "Google Pixel 6 Pro",
    },
    {
      id: "2",
      price: 529.99,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg",
      name: "Google Pixel 6",
    },
    {
      id: "3",
      price: 429.99,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-5a-5g-00.jpg",
      name: "Google Pixel 5a 5G",
    },
    {
      id: "4",
      price: 399.99,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-5-5g-1.jpg",
      name: "Google Pixel 5",
    },
    {
      id: "5",
      price: 493.99,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4a-5g-1.jpg",
      name: "Google Pixel 4a 5G",
    },
    {
      id: "6",
      price: 343.99,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-xl-1.jpg",
      name: "Google Pixel 4 XL",
    },
    {
      id: "7",
      price: 240.5,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-1.jpg",
      name: "Google Pixel 4",
    },
    {
      id: "8",
      price: 135.5,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-3a-xl-1.jpg",
      name: "Google Pixel 3a XL",
    },
    {
      id: "9",
      price: 135.99,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-3a-1.jpg",
      name: "Google Pixel 3a",
    },
    {
      id: "10",
      price: 150.5,
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-04.jpg",
      name: "Google Pixel",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl text-center mt-5 p-5">Mobile Products bellow </h1>
      <div className="containerr">
        {fakedata.map((value) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{value.name}</h5>
                  <p>{value.price}</p>
                  <img src={value.img} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
