import { AppRouter } from "@server/router/app.router";
import "@styles/globals.css";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { url } from "@utils/constants";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import superjson from "superjson";

function MyApp({
  Component,
  pageProps: { session, ...otherPageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Component {...otherPageProps} />
      </main>
    </SessionProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }
        return {};
      },
      links,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
