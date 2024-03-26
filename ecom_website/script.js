import './style.css';

import products from "./api/products.json"
import { showProductsContainer } from './homeProductsCards';

showProductsContainer(products);