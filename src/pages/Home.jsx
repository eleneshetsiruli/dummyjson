import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Carusel } from "./Carusel";
import { Footer } from "./Footer";
import { CircleCarusel } from "../components/CircleCarusel";
import { Brands } from "./Brands";
import { CategoryContext } from "../context/CategoryContext";

export const Home = () => {
  const [categories, setCatValue] = useContext(CategoryContext);
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
      <div className="flex pb-5  ">
        <Link onClick={() => setCatValue("home-decoration")} to={"categories"}>
          <div className="skinImg">HomeDecorations</div>
        </Link>
        <div className="flex flex-col gap-11 items-center">
          <div className=" link-count flex p-4 gap-9  ">
            <div className="links">
              <Link
                onClick={() => setCatValue("smartphones")}
                to={"categories"}
                className="links hover:underline"
              >
                Smartphones
              </Link>
              <Link
                onClick={() => setCatValue("laptops")}
                to={"categories"}
                className="links hover:underline"
              >
                Laptops
              </Link>
            </div>
            <div className="links">
              <Link
                onClick={() => setCatValue("groceries")}
                to={"categories"}
                className="links hover:underline"
              >
                Groceries
              </Link>
              <Link
                onClick={() => setCatValue("furniture")}
                to={"categories"}
                className="links hover:underline"
              >
                Furniture
              </Link>
            </div>
            <div className="links">
              <Link
                onClick={() => setCatValue("tops")}
                to={"categories"}
                className="links hover:underline"
              >
                Tops
              </Link>
              <Link
                onClick={() => setCatValue("womens-shoes")}
                to={"categories"}
                className="links hover:underline"
              >
                Womens-shoes
              </Link>
            </div>
            <div className="links">
              <Link
                onClick={() => setCatValue("womens-bags")}
                to={"categories"}
                className="links hover:underline"
              >
                Womens-bags
              </Link>
              <Link
                onClick={() => setCatValue("womens-dresses")}
                to={"categories"}
                className="links hover:underline"
              >
                Womens-dresses
              </Link>
            </div>
            <div className="links">
              <Link
                onClick={() => setCatValue("mens-shoes")}
                to={"categories"}
                className="links hover:underline"
              >
                Mens-shoes
              </Link>
              <Link
                onClick={() => setCatValue("mens-shirts")}
                to={"categories"}
                className="links hover:underline"
              >
                Mens shirts
              </Link>
            </div>
          </div>
          <Link onClick={() => setCatValue("skincare")} to={"categories"}>
            <div className="homeImg">skin-Care</div>
          </Link>
        </div>
      </div>
      <Brands />
      <AnimatedText />
      <Carusel />
      <CircleCarusel />
      <Footer />
    </div>
  );
};
