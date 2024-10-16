
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

export const runtime = 'edge'

declare global {
  var prisma: PrismaClient | undefined;
}

const neon = new Pool({ connectionString: process.env.AUTH_POSTGRES_PRISMA_URL });
const adapter = new PrismaNeon(neon);
const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
