import { clientEnvData } from "@env/client";
export const baseUrl = clientEnvData.NEXT_PUBLIC_VERCEL_URL
  ? `https://${clientEnvData.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const url = `${baseUrl}/api/trpc`;
