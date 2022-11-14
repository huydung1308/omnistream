import { getProduct } from "@Models/product";
import { getShelves } from "@Models/shelves";
import { totalWidthCalculator, maxHeightCalculator } from "@Utils/tools";

import { StoreInfo } from "@Models/storeInfo.types";

export const getStoreInfo = async (store_id: string): Promise<StoreInfo> => {
  console.log(`Getting store info with store_id: ${store_id}...`);
  const products = await getProduct(store_id);
  const shelves = await getShelves(store_id);

  const numOfProducts = products.length;
  const numOfShelves = shelves.length;

  const storeInfo = {
    store_id,
    stats: {
      numOfProducts,
      numOfShelves,
      productsPerShelf: numOfProducts / numOfShelves,
      totalProductWidth: totalWidthCalculator(products),
      maxProductHeigh: maxHeightCalculator(products),
      totalShelfWidth: totalWidthCalculator(shelves),
      maxShelfHeight: maxHeightCalculator(shelves),
    },
    products: products,
    shelves: shelves,
  };
  console.log(`Done...`);
  return storeInfo;
};
