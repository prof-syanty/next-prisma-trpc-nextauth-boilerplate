import nextAuthOptions from "@/pages/api/auth/[...nextauth]";
import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth/next";

export async function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const session =
    req && res && (await getServerSession(req, res, nextAuthOptions));
  return { req, res, prisma, session };
}

export type Context = ReturnType<typeof createContext>;
