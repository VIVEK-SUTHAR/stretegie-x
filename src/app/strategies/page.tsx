import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { TrendingUp, Search, Filter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function StrategiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white">
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
      </header>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Strategies
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="pl-8 bg-white bg-opacity-10 border-gray-700 text-white placeholder-gray-400"
                placeholder="Search strategies..."
                type="search"
              />
            </div>
            <Select className="bg-white bg-opacity-10 border-gray-700 text-white">
              <option value="">All Chains</option>
              <option value="ethereum">Ethereum</option>
              <option value="binance">Binance Smart Chain</option>
              <option value="polygon">Polygon</option>
              <option value="avalanche">Avalanche</option>
            </Select>
            <Button className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg transition-all duration-200 hover:bg-opacity-20"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {strategy.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {strategy.description}
                    </p>
                  </div>
                  <span className="bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded">
                    {strategy.chain}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">APY</p>
                    <p className="text-2xl font-bold text-green-400">
                      {strategy.apy}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Value Locked</p>
                    <p className="text-lg font-semibold">
                      ${strategy.tvl.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Risk Level</p>
                    <p className="text-sm font-semibold">
                      {strategy.riskLevel}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Created By</p>
                    <p className="text-sm font-semibold">{strategy.creator}</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  View Strategy
                </Button>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Load More Strategies
            </Button>
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 md:px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 StrategyX. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-400"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-400"
              href="#"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

const strategies = [
  {
    name: "Yield Farming Maximizer",
    description: "Optimized yield farming across multiple protocols",
    chain: "Ethereum",
    apy: 12.5,
    tvl: 5000000,
    riskLevel: "Medium",
    creator: "YieldMaster",
  },
  {
    name: "Stablecoin Liquidity Pool",
    description: "Provide liquidity for stablecoin pairs",
    chain: "Binance",
    apy: 8.2,
    tvl: 10000000,
    riskLevel: "Low",
    creator: "StableGenius",
  },
  {
    name: "DeFi Pulse Index",
    description: "Diversified index of top DeFi tokens",
    chain: "Polygon",
    apy: 15.7,
    tvl: 2500000,
    riskLevel: "Medium-High",
    creator: "IndexPro",
  },
  {
    name: "Automated Market Maker",
    description: "Liquidity provision for DEX trading pairs",
    chain: "Avalanche",
    apy: 18.3,
    tvl: 3000000,
    riskLevel: "High",
    creator: "LiquidityKing",
  },
  {
    name: "Lending Optimizer",
    description: "Optimize lending across multiple platforms",
    chain: "Ethereum",
    apy: 9.8,
    tvl: 7500000,
    riskLevel: "Low-Medium",
    creator: "LendingPro",
  },
  {
    name: "NFT Fractionalization",
    description: "Earn yield from fractionalized NFT ownership",
    chain: "Polygon",
    apy: 22.5,
    tvl: 1000000,
    riskLevel: "Very High",
    creator: "NFTYieldHunter",
  },
];
