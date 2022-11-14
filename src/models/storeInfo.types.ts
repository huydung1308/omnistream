import { Shelve } from "@Models/shelves.types";
import { Product } from "@Models/product.types";

export interface Stats {
  numOfProducts: number;
  numOfShelves: number;
  productsPerShelf: number;
  totalProductWidth: number;
  maxProductHeigh: number;
  totalShelfWidth: number;
  maxShelfHeight: number;
}

export interface StoreInfo {
  store_id: string;
  stats: Stats;
  products: Product[];
  shelves: Shelve[];
}
