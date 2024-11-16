// utils/explorer.ts

export const BLOCKSCOUT_URL = "https://eth-sepolia.blockscout.com";

export const getExplorerUrl = {
  // For addresses (wallets, contracts, etc)
  address: (address: string) => `${BLOCKSCOUT_URL}/address/${address}`,

  // For transactions
  tx: (hash: string) => `${BLOCKSCOUT_URL}/tx/${hash}`,
};

// Optional: Add link component constructor
export const getExplorerLink = {
  address: (address: string) => ({
    href: getExplorerUrl.address(address),
    text: `${address.slice(0, 6)}...${address.slice(-4)}`,
  }),

  tx: (hash: string) => ({
    href: getExplorerUrl.tx(hash),
    text: `${hash.slice(0, 6)}...${hash.slice(-4)}`,
  }),
};
