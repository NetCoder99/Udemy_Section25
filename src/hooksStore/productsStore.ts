import { initStore } from "./store";
import { productDummyList } from "../data/productDummyList";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState: any, productId: string)  => 
    {
      const tmpProducts = [...curState.products.products];
      const tmpIndex    = tmpProducts.findIndex((p) => p.id === productId);
      const tmpProduct  = tmpProducts[tmpIndex];
      tmpProduct.isFavorite = !tmpProduct.isFavorite;
      return { products: {products: tmpProducts}};
    }
  };
  initStore(actions, {products: productDummyList});
};

export default configureStore;
