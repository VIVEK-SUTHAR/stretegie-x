export const STRATEGYXCONTRACTADDRESS =
  "0x1ff155B8a3a765F081A3fD6D975E82AAF10d6F89";
export const STRATEGYXABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "strategyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "blockchains",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expectedAPY",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "riskLevel",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "creatorName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "StrategyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "StrategyFollowed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_creatorName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_strategyAddress",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "_blockchains",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_expectedAPY",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_riskLevel",
        type: "string",
      },
    ],
    name: "createStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "followStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllStrategies",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "creatorName",
            type: "string",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "address",
            name: "strategyAddress",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "blockchains",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "expectedAPY",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "riskLevel",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "followers",
            type: "uint256",
          },
        ],
        internalType: "struct StretegieX.Strategy[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getStrategy",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "creatorName",
            type: "string",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "address",
            name: "strategyAddress",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "blockchains",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "expectedAPY",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "riskLevel",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "followers",
            type: "uint256",
          },
        ],
        internalType: "struct StretegieX.Strategy",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "strategies",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "creatorName",
        type: "string",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "strategyAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expectedAPY",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "riskLevel",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "followers",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "strategyCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
