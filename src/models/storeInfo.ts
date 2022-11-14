import { path as rootPath } from "app-root-path";

import { getProduct } from "@Models/product";
import { getShelve } from "@Models/shelves";
import { StoreInfo } from "@Models/storeInfo.types";

const dataPaths = {
  product: `${rootPath}/data/product.csv`,
  shelve: `${rootPath}/data/shelf.csv`,
};

export const getStoreInfo = async (store_id: string): Promise<StoreInfo> => {
  console.log(`Getting store info with store_id: ${store_id}...`);
  const products = await getProduct(dataPaths.product, store_id);
  const shelves = await getShelve(dataPaths.shelve, store_id);

  const productFiltered = products.filter((p) => p.store_id === store_id);
  const shelveFiltered = shelves.filter((s) => s.store_id === store_id);

  const numOfProducts = productFiltered.length;
  const numOfShelves = shelveFiltered.length;

  const storeInfo = {
    store_id,
    stats: {
      numOfProducts,
      numOfShelves,
      productsPerShelf: numOfProducts / numOfShelves,
      totalProductWidth: productFiltered
        .map((product) => product.width)
        .reduce((a, b) => Number(a) + Number(b), 0),
      maxProductHeigh: Math.max(
        ...productFiltered.map((product) => product.height)
      ),
      totalShelfWidth: shelveFiltered
        .map((shelve) => shelve.width)
        .reduce((a, b) => Number(a) + Number(b), 0),
      maxShelfHeight: Math.max(
        ...shelveFiltered.map((product) => product.height)
      ),
    },
    product: productFiltered,
    shelves: shelveFiltered,
  };
  console.log(`Done...`);
  return storeInfo;
};
