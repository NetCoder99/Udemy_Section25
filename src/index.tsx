import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

//import ProductsProvider from './context/productsContext';
import configureProductsStore from './hooksStore/productsStore';
configureProductsStore();

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);
