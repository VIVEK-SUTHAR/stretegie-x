"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCreateStrategy } from "@/lib/hooks/useCreateStrategy";

export default function CreateStrategyPage() {
  const [riskLevel, setRiskLevel] = useState(50);
  const { createStrategy, isLoading, error } = useCreateStrategy();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    token: "",
    blockchain: "",
    lendingProtocol: "",
    swappingProtocol: "",
    expectedApy: 0,
    riskLevel: 50,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("this is formData", formData);

      const contractAddress = await createStrategy(formData);
      // Handle success - maybe redirect to the strategy page
      console.log("Strategy created with contract:", contractAddress);
    } catch (err) {
      console.error("Failed to create strategy:", err);
    }
  };

  const handleInputChange = (field: string) => (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string, field: keyof FormData) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="strategy-name"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Strategy Name
              </label>
              <Input
                id="strategy-name"
                value={formData.name}
                onChange={handleInputChange("name")}
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
                onChange={handleInputChange("description")}
              />
            </div>
            <div>
              <label
                htmlFor="token"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Token
              </label>
              <Select
                onValueChange={(value) => handleSelectChange(value, "token")}
              >
                <SelectTrigger className="w-full bg-white bg-opacity-10 border-gray-700 text-white">
                  <SelectValue placeholder="Select a token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">ETH</SelectItem>
                  <SelectItem value="usdc">USDC</SelectItem>
                  <SelectItem value="dai">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="blockchain"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Blockchain
              </label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange(value, "blockchain")
                }
              >
                <SelectTrigger className="w-full bg-white bg-opacity-10 border-gray-700 text-white">
                  <SelectValue placeholder="Select a blockchain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ethereum">Ethereum</SelectItem>
                  <SelectItem value="binance">Binance Smart Chain</SelectItem>
                  <SelectItem value="polygon">Polygon</SelectItem>
                  <SelectItem value="avalanche">Avalanche</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="lending-protocol"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Lending Protocol
              </label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange(value, "lendingProtocol")
                }
              >
                <SelectTrigger className="w-full bg-white bg-opacity-10 border-gray-700 text-white">
                  <SelectValue placeholder="Select a lending protocol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aave">Aave</SelectItem>
                  <SelectItem value="aerodrome">Aerodrome</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="swapping-protocol"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Swapping Protocol
              </label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange(value, "swappingProtocol")
                }
              >
                <SelectTrigger className="w-full bg-white bg-opacity-10 border-gray-700 text-white">
                  <SelectValue placeholder="Select a swapping protocol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1inch">1inch</SelectItem>
                  <SelectItem value="uniswap">Uniswap</SelectItem>
                </SelectContent>
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
                onChange={handleInputChange("expectedApy")}
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
                value={[formData.riskLevel]}
                onValueChange={(value) =>
                  handleSelectChange(value[0].toString(), "riskLevel")
                }
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
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Save as Draft
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                {isLoading ? "Creating Strategy..." : "Publish Strategy"}
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
