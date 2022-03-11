import { createProduct } from "./helpers/objectHelpers";
import {IProduct} from "./helpers/interface/objectProduct"

const newProduct: IProduct = createProduct(12, "d f g", "This is the title of the product, it will be truncated");

console.log(newProduct);


