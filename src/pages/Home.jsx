import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";
import { Carusel } from "./Carusel";
import { Footer } from "./Footer";

export const Home = () => {
  const { auth, handleLogIn } = useContext(AuthContext);
  return (
    <div>
      <div className="flex pb-20">
        <Link to={"skincare"}>
          <div className="skinImg">skinCare</div>
        </Link>
        <div className="flex flex-col gap-11 items-center">
          <div className="flex p-4 gap-9">
            <div className="links">
              <Link>Smartphones</Link>
              <Link>Laptops</Link>
            </div>
            <div className="links">
              <Link>Groceries</Link>
              <Link>Furniture</Link>
            </div>
            <div className="links">
              <Link>Tops</Link>
              <Link>Womens-shoes</Link>
            </div>
            <div className="links">
              <Link>Womens-bags</Link>
              <Link>Womens-dresses</Link>
            </div>
            <div className="links">
              <Link>Mens-shoes</Link>
              <Link>Mens shirts</Link>
            </div>
          </div>
          <Link to={"home-decoration"}>
            <div className="homeImg">Home-decoration</div>
          </Link>
        </div>
      </div>
      <Carusel />
      <Footer />
    </div>
  );
};
