import React, { useState } from "react";
import { productDummyList } from "../data/productDummyList";

export const ProductsContext = React.createContext({
  products: productDummyList,
  toggleFav: (productId: string) => {}
});

export default (props: any) => {
  const [productsList, setProductsList] = useState(productDummyList);

  const toggleFavorite = (productId: string) => {
    setProductsList(prevState => {
      const tmpProducts = [...prevState.products];
      const tmpIndex    = tmpProducts.findIndex(
        (p) => p.id === productId
      );
      const tmpProduct = tmpProducts[tmpIndex];
      tmpProduct.isFavorite = !tmpProduct.isFavorite;
      return {
        ...prevState,
        products: tmpProducts,
      };
     });
  };

  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFav: toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
