// hooks/useCreateStrategy.ts
import { useState } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STRATEGYXABI, STRATEGYXCONTRACTADDRESS } from "../constant";

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

  const { data: writeData, writeContractAsync: createStrategyOnChain } =
    useWriteContract({});

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
      const deploymentResponse = await fetch(
        "https://api.devvivek.tech/deploy",
        {
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
        }
      );

      if (!deploymentResponse.ok) {
        throw new Error("Contract deployment failed");
      }

      const { address: strategyAddress } = await deploymentResponse.json();

      const tx = await createStrategyOnChain({
        address: STRATEGYXCONTRACTADDRESS,
        abi: STRATEGYXABI,
        functionName: "createStrategy",
        args: [
          data.name, // _name
          data.description, // _description
          "Default Creator Name", // _creatorName
          strategyAddress as `0x${string}`, // _strategyAddress
          [data.blockchain], // _blockchains array
          BigInt(Math.floor(data.expectedApy * 100)), // _expectedAPY (converting to basis points)
          getRiskLevelString(data.riskLevel), // _riskLevel
        ],
      });

      return strategyAddress;
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

function getRiskLevelString(riskLevel: number): string {
  if (riskLevel <= 33) return "Low";
  if (riskLevel <= 66) return "Medium";
  return "High";
}
