import { productDef } from "../models/productDef";

const p1: productDef = {  id: 'p1',  title: 'Red Scarf',  description: 'A pretty red scarf.',  isFavorite: false};
const p2: productDef = {  id: 'p2',  title: 'Blue T-Shirt', description: 'A pretty blue t-shirt.',  isFavorite: false};
const p3: productDef = {  id: 'p3',  title: 'Green Trousers',  description: 'A pair of lightly green trousers.',  isFavorite: false};
const p4: productDef = {  id: 'p4',  title: 'Orange Hat',  description: 'Street style! An orange hat.',  isFavorite: false};
const p5: productDef = {  id: 'p5',  title: 'Brown Pants',  description: 'Wearing the brown pants.',  isFavorite: false};

export const productDummyList = {
  products: [p1,p2,p3,p4,p5]
};

