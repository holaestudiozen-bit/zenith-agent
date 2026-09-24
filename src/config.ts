export interface ZenithConfig {
  mode: "paper" | "live";
  maxRiskPerTradePct: number;
  dailyLossStopPct: number;
  maxConcurrentPositions: number;
  maxSlippageBps: number;
  minConfidence: number;
  minLiquidityUsd: number;
  cooldownLosses: number;
}

export const defaultConfig: ZenithConfig = {
  mode: "paper",
  maxRiskPerTradePct: 0.5,
  dailyLossStopPct: 2,
  maxConcurrentPositions: 3,
  maxSlippageBps: 50,
  minConfidence: 0.72,
  minLiquidityUsd: 250_000,
  cooldownLosses: 2
};
