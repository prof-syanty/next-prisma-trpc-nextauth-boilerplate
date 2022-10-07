import { serverEnvData } from "@env/server";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (serverEnvData.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // eslint-disable-next-line no-undef
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;
