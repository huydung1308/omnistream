import { Product } from "@Models/product.types";
import { processFile } from "@Utils/tools";

export const getProduct = async (
  productFilePath: string,
  store_id: string
): Promise<Product[]> => {
  console.log(`Getting products info with store_id: ${store_id}...`);
  return await processFile(productFilePath);
};
