import React, { useContext } from 'react';

import Card from '../UI/Card';
import './ProductItem.css';
import { ProductsContext } from '../../context/productsContext';

import { productDef } from '../../models/productDef';

const ProductItem = (props: productDef) => {
  const toggleFav = useContext(ProductsContext).toggleFav;

  const toggleFavHandler = () => {
    toggleFav(props.id);
  };

  return (
     <Card style={{ marginBottom: '1rem' }}>
       <div className="product-item">
         <h2 className={props.isFavorite ? 'is-fav' : ''}>{props.title}</h2>
         <p>{props.description}</p>
         <button
           className={!props.isFavorite ? 'button-outline' : ''}
           onClick={toggleFavHandler}
         >
           {props.isFavorite ? 'Un-Favorite' : 'Favorite'}
         </button>
       </div>
     </Card>
  );
};

export default ProductItem;
