import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  let data = [
    {
      product: "Fancy Product",
      price: "$40.00 - $80.00",
    },
    {
      product: "Special Item",
      price: "$20.00",
      sale: "badge bg-dark text-white position-absolute",
      pricetext: "text-decoration-line-through text-secondary",
      price1: "$18.00",
      starclass: "d-flex justify-content-center small text-warning mb-2",
      star: "bi bi-star-fill",
    },
    {
      product: "Sale Item",
      price: "$50.00",
      sale: "badge bg-dark text-white position-absolute",
      pricetext: "text-decoration-line-through text-secondary",
      price1: "$25.00",
    },
    {
      product: "Popular Item",
      price: "$40.00",
      starclass: "d-flex justify-content-center small text-warning mb-2",
      star: "bi bi-star-fill",
    },
    {
      product: "Sale Item",
      price: "$50.00",
      pricetext: "text-decoration-line-through text-secondary",
      price1: "$25.00",
      sale: "badge bg-dark text-white position-absolute",
    },
    {
      product: "Fancy Product",
      price: "$120.00 - $280.00",
    },
    {
      product: "Special Item",
      price: "$20.00",
      pricetext: "text-decoration-line-through text-secondary",
      price1: "$18.00",
      starclass: "d-flex justify-content-center small text-warning mb-2",
      star: "bi bi-star-fill",
      sale: "badge bg-dark text-white position-absolute",
    },
    {
      product: "Popular Item",
      price: "$40.00",
      starclass: "d-flex justify-content-center small text-warning mb-2",
      star: "bi bi-star-fill",
    },
  ];
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Header />
      <Cards value={data} setCartCount={setCartCount} />
      <Footer />
    </div>
  );
};

export default App;
