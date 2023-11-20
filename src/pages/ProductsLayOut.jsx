import { Header } from "./Header";

export const ProductsLayOut = ({ Children }) => {
  return (
    <div>
      <Header />
      {Children}
    </div>
  );
};
