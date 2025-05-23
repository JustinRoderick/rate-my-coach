import { drizzle } from "drizzle-orm/node-postgres";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

export const db = drizzle(process.env.DATABASE_URL || "");
const pool = db.$client;
