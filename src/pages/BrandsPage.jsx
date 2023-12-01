import { useContext } from "react";
import { ProductCard } from "./Products";
import { BrandContext } from "../context/BrandContext";

export const BrandsPage = () => {
  const { filteredBrands } = useContext(BrandContext);

  return (
    <div className="flex justify-center pt-20 gap-5">
      {filteredBrands?.map((el) => (
        <div key={el.id}>
          <ProductCard key={el.id} data={el} />
        </div>
      ))}
    </div>
  );
};
