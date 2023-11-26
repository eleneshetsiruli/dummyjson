import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Carusel } from "./Carusel";
import { Footer } from "./Footer";
import { CircleCarusel } from "../components/CircleCarusel";

export const Home = () => {
  const AnimatedText = () => {
    return (
      <div className="animated-text-container">
        <h1 className="animated-text font ">Hot Products ⤵ </h1>
      </div>
    );
  };

  const { auth, handleLogIn } = useContext(AuthContext);
  return (
    <div>
      <div className="flex pb-5">
        <Link to={"homedecorations"}>
          <div className="skinImg">HomeDecorations</div>
        </Link>
        <div className="flex flex-col gap-11 items-center">
          <div className=" link-count flex p-4 gap-9">
            <div className="links">
              <Link className="hover:underline">Smartphones</Link>
              <Link className="hover:underline">Laptops</Link>
            </div>
            <div className="links">
              <Link className="hover:underline">Groceries</Link>
              <Link className="hover:underline">Furniture</Link>
            </div>
            <div className="links">
              <Link className="hover:underline">Tops</Link>
              <Link className="hover:underline">Womens-shoes</Link>
            </div>
            <div className="links">
              <Link className="hover:underline">Womens-bags</Link>
              <Link className="hover:underline">Womens-dresses</Link>
            </div>
            <div className="links">
              <Link className="hover:underline">Mens-shoes</Link>
              <Link className="hover:underline">Mens shirts</Link>
            </div>
          </div>
          <Link to={"skincare"}>
            <div className="homeImg">skin-Care</div>
          </Link>
        </div>
      </div>
      <AnimatedText />
      <Carusel />
      <CircleCarusel />
      <Footer />
    </div>
  );
};
