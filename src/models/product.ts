import { path as rootPath } from "app-root-path";

import { Product } from "@Models/product.types";
import { processFile } from "@Utils/tools";

const productPath = `${rootPath}/data/product.csv`;

export const getProduct = async (store_id: string): Promise<Product[]> => {
  let products = [];
  try {
    console.log(`Getting products info with store_id: ${store_id}...`);
    products = await processFile(productPath);
    return products.filter((s) => s.store_id === store_id);
  } catch (error) {
    console.log(error);
    return products;
  }
};
