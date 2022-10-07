import testData from "@data/test";
import prisma from "@lib/prisma";

async function main() {
  await prisma.user.create({
    data: testData.user,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });

export {};
