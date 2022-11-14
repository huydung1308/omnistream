import { exportFile } from "@Utils/tools";
import { getStoreInfo } from "@Models/storeInfo";

const exportFileFromTemplate = async () => {
  const args = process.argv.slice(2);
  if (Array.isArray(args) && args.length === 1) {
    const store_id = args[0];
    console.log(`Exporting data with store_id: ${store_id}...`);
    const storeInfo = await getStoreInfo(store_id);
    await exportFile(store_id, storeInfo);
  } else {
    throw new Error("Please provide a valid store id");
  }
};

exportFileFromTemplate();
