import React from "react";

const Home = () => {
  return (
    <>
      <div className="add-to-cart">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxcFQwnbaBMJWVm5MxmBjfwljaOt2CfwDMg&s" />
      </div>
      <div>Welcome to Home</div>;
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://img.lovepik.com/element/40177/3459.png_300.png" />
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxcFQwnbaBMJWVm5MxmBjfwljaOt2CfwDMg&s" /> */}
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Home;
