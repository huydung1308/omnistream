import { path as rootPath } from "app-root-path";

import { Shelve } from "@Models/shelves.types";
import { processFile } from "@Utils/tools";

const shelvePath = `${rootPath}/data/shelf.csv`;

export const getShelves = async (store_id: string): Promise<Shelve[]> => {
  let shelves = [];
  try {
    shelves = await processFile(shelvePath);
    return shelves.filter((s) => s.store_id === store_id);
  } catch (error) {
    console.log(error);
    return shelves;
  }
};
