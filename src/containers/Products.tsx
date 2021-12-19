import React from 'react';
import './Products.css';
import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooksStore/store';
//import { productDef } from '../models/productDef';


const Products = (props: any) => {
  const state:any = useStore()[0];
  //let productsList:productDef[] = state.products.products;
  //console.log('productsList', productsList);

  return (
    <ul className="products-list">
      {/* @ts-ignore */}
      {state.products.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id?.toString() || "-1"}
          title={prod.title}
          description={prod.description}
          isFavorite={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
