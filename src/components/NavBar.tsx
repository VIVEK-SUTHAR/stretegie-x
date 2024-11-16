import { TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { WalletDefault } from "@coinbase/onchainkit/wallet";

function NavBar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <TrendingUp className="h-6 w-6 text-cyan-400" />
        <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          StrategyX
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-cyan-400 transition-colors"
          href="#"
        >
          Dashboard
        </Link>
        <Link
          className="text-sm font-medium text-cyan-400 transition-colors"
          href="#"
        >
          Strategies
        </Link>
        <Link
          className="text-sm font-medium hover:text-cyan-400 transition-colors"
          href="#"
        >
          My Portfolio
        </Link>
        <Link
          className="text-sm font-medium hover:text-cyan-400 transition-colors"
          href="#"
        >
          Profile
        </Link>
      </nav>

      <WalletDefault />
    </header>
  );
}

export default NavBar;
