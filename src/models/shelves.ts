import { Shelve } from "@Models/shelves.types";
import { processFile } from "@Utils/tools";

export const getShelve = async (
  productFilePath: string,
  store_id: string
): Promise<Shelve[]> => {
  console.log(`Getting shelves info with store_id: ${store_id}...`);
  return await processFile(productFilePath);
};
