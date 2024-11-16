import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TrendingUp,
  Zap,
  Shield,
  Users,
  DollarSign,
  BarChart2,
  ChevronRight,
  Share2,
  Search,
  Coins,
} from "lucide-react";
import Link from "next/link";

export default function StrategyXLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <TrendingUp className="h-8 w-8 text-cyan-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            StrategyX
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-cyan-400 transition-colors"
            href="#"
          >
            Strategies
          </Link>
          <Link
            className="text-sm font-medium hover:text-cyan-400 transition-colors"
            href="#"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:text-cyan-400 transition-colors"
            href="#"
          >
            For Traders
          </Link>
          <Link
            className="text-sm font-medium hover:text-cyan-400 transition-colors"
            href="#"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-roboto font-bold sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 pb-2">
                  Bridge the Gap in DeFi Trading
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                  StrategyX connects novice traders with expert strategies,
                  empowering everyone to trade smarter in the DeFi space.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105">
                  Explore Strategies
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
                >
                  Share Your Expertise
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black bg-opacity-30">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold font-roboto pb-2 sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Why Choose StrategyX?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg transition-all duration-200 hover:bg-opacity-20 hover:scale-105">
                <Zap className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Access Expert Strategies
                </h3>
                <p className="text-gray-300">
                  Leverage the knowledge of experienced traders without
                  extensive research
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg transition-all duration-200 hover:bg-opacity-20 hover:scale-105">
                <Shield className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Risk Management</h3>
                <p className="text-gray-300">
                  Choose strategies that align with your risk tolerance and
                  goals
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg transition-all duration-200 hover:bg-opacity-20 hover:scale-105">
                <Users className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Community-Driven</h3>
                <p className="text-gray-300">
                  Learn from a network of successful DeFi traders and
                  enthusiasts
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg transition-all duration-200 hover:bg-opacity-20 hover:scale-105">
                <DollarSign className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Incentivized Sharing</h3>
                <p className="text-gray-300">
                  Earn rewards by sharing your successful trading strategies
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg transition-all duration-200 hover:bg-opacity-20 hover:scale-105">
                <BarChart2 className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
                <p className="text-gray-300">
                  Monitor and analyze strategy performance in real-time
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg transition-all duration-200 hover:bg-opacity-20 hover:scale-105">
                <TrendingUp className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Skill Development</h3>
                <p className="text-gray-300">
                  Improve your trading skills by learning from top performers
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold font-roboto pb-2 sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              How StrategyX Works
            </h2>

            {/* For New Traders */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">
                For New Traders
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    <Search className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Browse Strategies</h4>
                  <p className="text-gray-300">
                    Explore a curated selection of proven DeFi trading
                    strategies
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    <Coins className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Choose and Execute</h4>
                  <p className="text-gray-300">
                    Select strategies that match your goals and risk profile
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    <BarChart2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Track and Learn</h4>
                  <p className="text-gray-300">
                    Monitor performance and gain insights from expert strategies
                  </p>
                </div>
              </div>
            </div>

            {/* For Experienced Traders */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-500">
                For Experienced Traders
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    <Share2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Share Your Expertise
                  </h4>
                  <p className="text-gray-300">
                    Publish your successful trading strategies on the platform
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Build a Following</h4>
                  <p className="text-gray-300">
                    Gain recognition and followers as your strategies perform
                    well
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Earn Rewards</h4>
                  <p className="text-gray-300">
                    Get incentivized as others successfully use your strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          © 2024 StrategyX. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
