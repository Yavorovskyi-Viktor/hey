import { TEST_LENS_ID } from "@hey/data/constants";
import prisma from "../client";

const seedAccountStatus = async (): Promise<number> => {
  // Delete all accountStatus
  await prisma.profileStatus.deleteMany();

  // Seed accountStatus
  await prisma.profileStatus.create({
    data: { id: TEST_LENS_ID, emoji: "😀", message: "Status message" }
  });

  return 1;
};

export default seedAccountStatus;
