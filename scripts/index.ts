import { createProduct } from "./helpers/objectHelpers";
import {Product} from "./interfaces/ObjectProduct";


const newProduct: Product = createProduct({
    id: 1234,
    code: "password",
    title: "Mariano David Franco",
  });


console.log(newProduct)



