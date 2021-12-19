import React, { useContext} from 'react';
import './Products.css';
import {ProductsContext} from '../context/productsContext';
import ProductItem from '../components/Products/ProductItem';

const Products = (props: any) => {
  const productsList = useContext(ProductsContext).products;

  return (
    <ul className="products-list">
      {productsList.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFavorite={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
