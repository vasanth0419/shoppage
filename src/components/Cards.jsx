import React, { useState } from "react";
import "./style/Card.css";

const Cards = ({ value, setCartCount }) => {
  // Initialize cart counts state with an array of zeros of the same length as value
  const [cartCounts, setCartCounts] = useState(Array(value.length).fill(0));

  const handleAddToCart = (index) => {
    setCartCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index]++;
      setCartCount((prevCount) => prevCount + 1); // Increment cart count
      return newCounts;
    });
  };

  const handleRemoveFromCart = (index) => {
    setCartCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(0, newCounts[index] - 1);
      setCartCount((prevCount) => prevCount - 1); // Decrement cart count
      return newCounts;
    });
  };

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
        {value.map((item, index) => (
          <div key={index} className="col mb-5">
            <div className="card h-100">
              {item.sale && <div className={item.sale}>Sale</div>}
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{item.product}</h5>
                  <div className={item.starclass}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={item.star}></i>
                    ))}
                  </div>
                  <span className={item.pricetext}>{item.price1}</span>
                  {item.price}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {cartCounts[index] === 0 ? (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleAddToCart(index)}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
