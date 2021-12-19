import React from 'react';

import Card from '../UI/Card';
import './ProductItem.css';
import { useStore } from '../../hooksStore/store';

import { productDef } from '../../models/productDef';

const ProductItem = React.memo((props: productDef) => {
  console.log('ProductItem.render');
  
  const dispatch:any = useStore(false)[1];  

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', props.id);
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
});

export default ProductItem;
