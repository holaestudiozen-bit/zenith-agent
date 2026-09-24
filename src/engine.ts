import { ZenithConfig } from "./config.js";
import { RiskGovernor } from "./riskGovernor.js";
import { analyze } from "./strategy.js";
import { Telemetry } from "./telemetry.js";
import { MarketSnapshot, PortfolioState } from "./types.js";

export class ZenithEngine {
  private readonly risk: RiskGovernor;
  readonly telemetry = new Telemetry();

  constructor(private readonly config: ZenithConfig) {
    this.risk = new RiskGovernor(config);
  }

  decide(market: MarketSnapshot, portfolio: PortfolioState) {
    const signal = analyze(market);
    const risk = this.risk.evaluate(signal, market, portfolio);
    const action = risk.approved ? signal.side : "NO_TRADE";
    const event = this.telemetry.record({
      symbol: market.symbol,
      decision: action,
      reason: risk.reason,
      confidence: signal.confidence,
      riskUsd: risk.maxRiskUsd
    });
    return { signal, risk, action, event, mode: this.config.mode };
  }
}
