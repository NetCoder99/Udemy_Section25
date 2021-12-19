import { TOGGLE_FAV } from "../actions/products";
import { productDummyList } from "../../data/productDummyList";

const initialState = productDummyList;

const productReducer = (state = initialState, action: { type: string, productId: string }) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const tmpProducts = [...state.products];
      const tmpIndex    = tmpProducts.findIndex(
        (p) => p.id === action.productId
      );
      const tmpProduct = tmpProducts[tmpIndex];
      tmpProduct.isFavorite = !tmpProduct.isFavorite;
      return {
        ...state,
        products: tmpProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
