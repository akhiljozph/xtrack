import path from "path";
import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

const envFilePath = path.resolve(__dirname, `../environments/.env.${env}`);

dotenv.config({ path: envFilePath });
