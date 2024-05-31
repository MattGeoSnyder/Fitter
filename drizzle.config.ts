import "@/db/envConfig";
import { defineConfig } from "drizzle-kit";

console.log("POSTGRES_URL", process.env.POSTGRES_URL);

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
