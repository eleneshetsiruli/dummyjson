import { useContext } from "react";
import { Link } from "react-router-dom";
import { BrandContext } from "../context/BrandContext";

export const Brands = () => {
  const { setBrandValue } = useContext(BrandContext);
  return (
    <div className="brands">
      <Link to={"brands"} onClick={() => setBrandValue("Apple")}>
        <div className="apple brand-icons"></div>
      </Link>

      <Link to={"brands"} onClick={() => setBrandValue("Samsung")}>
        <div className="samsung brand-icons"></div>
      </Link>
      <Link to={"brands"} onClick={() => setBrandValue("OPPO")}>
        <div className="oppo brand-icons"></div>
      </Link>

      <Link onClick={() => setBrandValue("Dermive")} to={"brands"}>
        <div className="dermive brand-icons"></div>
      </Link>

      <Link onClick={() => setBrandValue("Huawei")} to={"brands"}>
        <div className="huawei brand-icons"></div>
      </Link>
      <Link to={"brands"} onClick={() => setBrandValue("Infinix")}>
        <div className="infinix brand-icons"></div>
      </Link>
      <Link to={"brands"} onClick={() => setBrandValue("HP Pavilion")}>
        <div className="hp brand-icons"></div>
      </Link>
    </div>
  );
};
