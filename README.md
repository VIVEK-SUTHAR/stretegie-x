# StrategyX

<div align="center">
  <img src="https://ethglobal.b-cdn.net/projects/4jrfm/screenshots/q9nqi/default.jpg" alt="StrategyX Logo" width="200"/>

  <h3>Democratizing DeFi Yield Strategies</h3>

  <p>A decentralized marketplace connecting expert traders with yield seekers through automated, battle-tested strategies.</p>

[![Built at ETHGlobal Bangkok](https://img.shields.io/badge/Built%20at-ETHGlobal%20Bangkok-blue)](https://ethglobal.com)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://stretegie-x.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

## 🌟 Overview

StrategyX bridges the gap between DeFi experts and users seeking better yields. Our platform automates the entire process from strategy creation to execution, making sophisticated yield strategies accessible to everyone.

### Key Features

- 🔄 Automated strategy deployment
- 📊 Real-time performance tracking
- 🔐 Risk assessment and monitoring
- 💰 Auto-compounding yields
- 🤝 Expert-curated strategies
- 📱 User-friendly interface

## 🏗️ Architecture

### Smart Contracts

- Main Strategy Contract (Base Network)

  - Handles strategy registration and management
  - Manages user investments and withdrawals
  - Automates yield compounding
  - Address - 0x1ff155B8a3a765F081A3fD6D975E82AAF10d6F89

- Dynamic Strategy Generator
  - Node.js server for contract customization
  - Runtime contract modification and deployment
  - Protocol-specific optimizations
  - Link - https://github.com/VIVEK-SUTHAR/strategry-generator

### Frontend

- **Tech Stack**:
  - Next.js 14
  - Tailwind CSS
  - wagmi/viem
  - Framer Motion
  - CDP - Onchain Kit

### Protocol Integrations

- **Lending**: Aave
- **DEX**: Uniswap V3
- **Price Feeds**: Pyth Network
- **Indexing**: CurveGrid

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 8.0.0
```
