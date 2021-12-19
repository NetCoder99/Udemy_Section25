import React, { useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

import {ProductsContext} from '../context/productsContext';

const Favorites = (props: any) => {
  const favProductsList = useContext(ProductsContext).products.products.filter(p => p.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favProductsList.length > 0) {
    content = (
      <ul className="products-list">
        {favProductsList.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description} 
            />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
