export type MarketRegime = "TREND" | "RANGE" | "CHAOS";

export interface MarketSnapshot {
  symbol: string;
  price: number;
  momentum: number;
  volatility: number;
  liquidityUsd: number;
  expectedSlippageBps: number;
}

export interface Signal {
  symbol: string;
  side: "BUY" | "SELL" | "NO_TRADE";
  confidence: number;
  regime: MarketRegime;
  rationale: string[];
}

export interface PortfolioState {
  equityUsd: number;
  dailyPnlUsd: number;
  openPositions: number;
  consecutiveLosses: number;
  killSwitch: boolean;
}

export interface RiskDecision {
  approved: boolean;
  reason: string;
  maxRiskUsd: number;
}
