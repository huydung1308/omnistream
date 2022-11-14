import * as fs from "fs";
import { writeFile } from "jsonfile";
import { parse } from "csv-parse";
import { path as rootPath } from "app-root-path";

import { Item } from "./tools.type";

export const totalWidthCalculator = (items: Item[]): number => {
  return items.map(({ width }) => Number(width)).reduce((a, b) => a + b, 0);
};

export const maxHeightCalculator = (items: Item[]): number => {
  return Math.max(...items.map(({ height }) => Number(height)));
};

export const processFile = async (fileName: string): Promise<any[]> => {
  const records: any = [];
  const parser = fs.createReadStream(fileName).pipe(
    parse({
      trim: true,
      columns: true,
      ignore_last_delimiters: true,
      skip_empty_lines: true,
    })
  );
  for await (const record of parser) {
    // Work with each record
    records.push(record);
  }
  return records;
};

export const exportFile = async (
  store_id: string,
  data: Object,
  fileName: string = "output"
) => {
  const exportPath = `${rootPath}/export/${fileName}.json`;
  console.log(`Exporting data with store_id: ${store_id} at ${exportPath}`);
  await writeFile(exportPath, data);
  console.log(`Exported!`);
};
