# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# REACT TASK-2 [ *_ SHOPPING PAGE_*]

# CREATE A REACT APP AS DEFAULT STEPS USING CMDS..

## IN `INDEX.HTML` LINK BOOTSTRAP.

## DEFAULT FILE `APP.JSX`

##### CODES

```
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



```

## CREATE A COMPONENTS FOLDER ADD FILES `NAVBAR.JSX`

```
import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartCount}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

```

## CREATE A COMPONENTS FOLDER ADD FILES `HEADER.JSX`

```
import React from "react";

const Header = () => {
  return (
    <div>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;


```

## CREATE A COMPONENTS FOLDER ADD FILES `CARD.JSX`

```
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

```

## CREATE A COMPONENTS FOLDER ADD FILES `FOOTER.JSX`

```
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright © Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

```
