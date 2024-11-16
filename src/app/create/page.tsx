"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CreateStrategyPage() {
  const [riskLevel, setRiskLevel] = useState(50);

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
            className="text-sm font-medium hover:text-cyan-400 transition-colors"
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
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Link
              href="/strategies"
              className="text-cyan-400 hover:text-cyan-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Create New Strategy
            </h1>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="strategy-name"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Strategy Name
              </label>
              <Input
                id="strategy-name"
                className="w-full bg-white bg-opacity-10 border-gray-700 text-white"
                placeholder="Enter strategy name"
              />
            </div>
            <div>
              <label
                htmlFor="strategy-description"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Description
              </label>
              <Textarea
                id="strategy-description"
                className="w-full bg-white bg-opacity-10 border-gray-700 text-white"
                placeholder="Describe your strategy"
                rows={4}
              />
            </div>
            <div>
              <label
                htmlFor="chain"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Blockchain
              </label>
              <Select
                id="chain"
                className="w-full bg-white bg-opacity-10 border-gray-700 text-white"
              >
                <option value="">Select a blockchain</option>
                <option value="ethereum">Ethereum</option>
                <option value="binance">Binance Smart Chain</option>
                <option value="polygon">Polygon</option>
                <option value="avalanche">Avalanche</option>
              </Select>
            </div>
            <div>
              <label
                htmlFor="apy"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Expected APY (%)
              </label>
              <Input
                id="apy"
                type="number"
                className="w-full bg-white bg-opacity-10 border-gray-700 text-white"
                placeholder="Enter expected APY"
              />
            </div>
            <div>
              <label
                htmlFor="risk-level"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Risk Level
              </label>
              <Slider
                id="risk-level"
                min={0}
                max={100}
                step={1}
                value={[riskLevel]}
                onValueChange={(value) => setRiskLevel(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Low Risk</span>
                <span>High Risk</span>
              </div>
              <p className="text-center text-sm text-gray-200 mt-2">
                Current Risk Level:{" "}
                {riskLevel <= 33 ? "Low" : riskLevel <= 66 ? "Medium" : "High"}
              </p>
            </div>
            <div>
              <label
                htmlFor="initial-investment"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Minimum Initial Investment ($)
              </label>
              <Input
                id="initial-investment"
                type="number"
                className="w-full bg-white bg-opacity-10 border-gray-700 text-white"
                placeholder="Enter minimum investment"
              />
            </div>
            <div>
              <label
                htmlFor="strategy-steps"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Strategy Steps
              </label>
              <Textarea
                id="strategy-steps"
                className="w-full bg-white bg-opacity-10 border-gray-700 text-white"
                placeholder="Outline the steps of your strategy"
                rows={6}
              />
            </div>
            <div>
              <label
                htmlFor="required-tools"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Required Tools/Platforms
              </label>
              <Input
                id="required-tools"
                className="w-full bg-white bg-opacity-10 border-gray-700 text-white"
                placeholder="List required tools or platforms"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Save as Draft
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Publish Strategy
              </Button>
            </div>
          </form>
        </div>
      </main>
      <footer className="py-6 px-4 md:px-6 border-t border-gray-700">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center">
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
