import {
  ConnectWalletText,
  Wallet,
  ConnectWallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import React from "react";
import { Button } from "./ui/button";
import { getExplorerUrl } from "@/lib/blockscout";
import { useAccount } from "wagmi";

function Login() {
  const { address } = useAccount();
  return (
    <Wallet className="ml-4">
      <ConnectWallet className="bg-black py-2 rounded-lg">
        <ConnectWalletText>Log In</ConnectWalletText>
        <Avatar className="h-6 w-6 bg-white text-white" />
        <Name className="text-white" />
      </ConnectWallet>
      <WalletDropdown className="w-full">
        <Identity className="px-4 pt-3 pb-2 bg-black">
          <Address />
        </Identity>
        {/* <WalletDropdownLink
          className="hover:bg-black"
          icon="wallet"
          href="https://keys.coinbase.com"
        >
          Wallet
        </WalletDropdownLink> */}
        <WalletDropdownDisconnect className="bg-black" />
      </WalletDropdown>
    </Wallet>
  );
}

export default Login;
