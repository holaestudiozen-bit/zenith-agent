import { defaultConfig } from "./config.js";
import { ZenithEngine } from "./engine.js";
import { MarketSnapshot, PortfolioState } from "./types.js";

const engine = new ZenithEngine(defaultConfig);
const portfolio: PortfolioState = {
  equityUsd: 1000,
  dailyPnlUsd: 0,
  openPositions: 0,
  consecutiveLosses: 0,
  killSwitch: false
};

const scenarios: MarketSnapshot[] = [
  { symbol: "SOL/USDC", price: 150, momentum: 0.78, volatility: 0.42, liquidityUsd: 5_000_000, expectedSlippageBps: 12 },
  { symbol: "SOL/USDC", price: 150, momentum: 0.80, volatility: 0.91, liquidityUsd: 5_000_000, expectedSlippageBps: 15 },
  { symbol: "SOL/USDC", price: 150, momentum: 0.75, volatility: 0.40, liquidityUsd: 80_000, expectedSlippageBps: 95 }
];

for (const market of scenarios) {
  console.log(JSON.stringify(engine.decide(market, portfolio), null, 2));
}
