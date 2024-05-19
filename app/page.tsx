"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { EmailTemplate } from "../components/email";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button>
      <h1>André Santin</h1>
      <h3>Web Developer</h3>
      <EmailTemplate firstName="santin" />
    </>
  );
}
