import { type ReactNode } from "react";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "./config";
import { Providers } from "./providers";

export default function Layout({ children }: { children: ReactNode }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  console.log("XXXXXX", initialState);
  return (
    <html lang="en">
      <body
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("./coder.png")`,
        }}
      >
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}
