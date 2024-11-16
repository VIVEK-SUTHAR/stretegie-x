// hooks/useCreateStrategy.ts
import { useState } from "react";

interface CreateStrategyData {
  name: string;
  description: string;
  token: string;
  blockchain: string;
  lendingProtocol: string;
  swappingProtocol: string;
  expectedApy: number;
  riskLevel: number;
}

interface DeploymentConfig {
  baseTokenAddress: string;
  destinationTokenAddress: string;
  routerAddress: string;
  poolProviderAddress: string;
}

const PROTOCOL_ADDRESSES: Record<string, Record<string, DeploymentConfig>> = {
  "base-sepolia": {
    aave: {
      baseTokenAddress: "0x4200000000000000000000000000000000000006", // WETH
      destinationTokenAddress: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", // USDC
      routerAddress: "0x4E3a9f9fB98260AEBA5671803cE1f361584E64bE", // Uniswap Router
      poolProviderAddress: "0xd449FeD49d9C443688d6816fE6872F21402e41de", // Aave Pool Provider
    },
  },
};

export const useCreateStrategy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createStrategy = async (data: CreateStrategyData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Get deployment config based on selected blockchain and protocols
      const config =
        PROTOCOL_ADDRESSES["base-sepolia"][data.lendingProtocol.toLowerCase()];

      if (!config) {
        throw new Error("Unsupported protocol configuration");
      }

      // First, deploy the contract
      const deploymentResponse = await fetch("/api/deploy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          baseTokenAddress: config.baseTokenAddress,
          destinationTokenAddress: config.destinationTokenAddress,
          routerAddress: config.routerAddress,
          poolProviderAddress: config.poolProviderAddress,
        }),
      });

      if (!deploymentResponse.ok) {
        throw new Error("Contract deployment failed");
      }

      const { address: contractAddress } = await deploymentResponse.json();

      // Here you would typically save the strategy details to your database
      // including the deployed contract address
      const strategyData = {
        ...data,
        contractAddress,
        createdAt: new Date().toISOString(),
      };

      // Save to database (implement this API endpoint)
      await fetch("/api/strategies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(strategyData),
      });

      return contractAddress;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createStrategy,
    isLoading,
    error,
  };
};
