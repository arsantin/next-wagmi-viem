"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { type State, WagmiProvider } from "wagmi";

import { config } from "./config";
import Web3ModalProvider from "../context";

type Props = {
  children: ReactNode;
  initialState: State | undefined;
};

export function Providers({ children, initialState }: Props) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <Web3ModalProvider initialState={initialState}>
        {children}
      </Web3ModalProvider>
    </WagmiProvider>
  );
}
