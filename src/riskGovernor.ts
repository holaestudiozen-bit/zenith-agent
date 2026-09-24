import { ZenithConfig } from "./config.js";
import { MarketSnapshot, PortfolioState, RiskDecision, Signal } from "./types.js";

export class RiskGovernor {
  constructor(private readonly config: ZenithConfig) {}

  evaluate(signal: Signal, market: MarketSnapshot, portfolio: PortfolioState): RiskDecision {
    const maxRiskUsd = portfolio.equityUsd * (this.config.maxRiskPerTradePct / 100);

    if (portfolio.killSwitch) return { approved: false, reason: "KILL_SWITCH_ACTIVE", maxRiskUsd: 0 };
    if (signal.side === "NO_TRADE") return { approved: false, reason: "NO_TRADE_SIGNAL", maxRiskUsd: 0 };
    if (signal.regime === "CHAOS") return { approved: false, reason: "CHAOS_REGIME", maxRiskUsd: 0 };
    if (signal.confidence < this.config.minConfidence) return { approved: false, reason: "CONFIDENCE_TOO_LOW", maxRiskUsd: 0 };
    if (market.liquidityUsd < this.config.minLiquidityUsd) return { approved: false, reason: "LIQUIDITY_TOO_LOW", maxRiskUsd: 0 };
    if (market.expectedSlippageBps > this.config.maxSlippageBps) return { approved: false, reason: "SLIPPAGE_TOO_HIGH", maxRiskUsd: 0 };
    if (portfolio.openPositions >= this.config.maxConcurrentPositions) return { approved: false, reason: "POSITION_LIMIT", maxRiskUsd: 0 };

    const dailyLossPct = portfolio.dailyPnlUsd < 0
      ? Math.abs(portfolio.dailyPnlUsd) / portfolio.equityUsd * 100
      : 0;
    if (dailyLossPct >= this.config.dailyLossStopPct) return { approved: false, reason: "DAILY_LOSS_STOP", maxRiskUsd: 0 };
    if (portfolio.consecutiveLosses >= this.config.cooldownLosses) return { approved: false, reason: "LOSS_COOLDOWN", maxRiskUsd: 0 };

    return { approved: true, reason: "RISK_CHECKS_PASSED", maxRiskUsd };
  }
}
