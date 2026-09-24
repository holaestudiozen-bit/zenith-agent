import { MarketSnapshot, MarketRegime, Signal } from "./types.js";

export function classifyRegime(m: MarketSnapshot): MarketRegime {
  if (m.volatility >= 0.8) return "CHAOS";
  if (Math.abs(m.momentum) >= 0.55) return "TREND";
  return "RANGE";
}

export function analyze(m: MarketSnapshot): Signal {
  const regime = classifyRegime(m);
  if (regime === "CHAOS") {
    return { symbol: m.symbol, side: "NO_TRADE", confidence: 0.95, regime, rationale: ["Extreme volatility: preserve capital"] };
  }

  if (regime === "TREND") {
    const confidence = Math.min(0.95, 0.65 + Math.abs(m.momentum) * 0.3);
    return {
      symbol: m.symbol,
      side: m.momentum > 0 ? "BUY" : "SELL",
      confidence,
      regime,
      rationale: ["Trend regime", "Momentum confirmation"]
    };
  }

  return {
    symbol: m.symbol,
    side: "NO_TRADE",
    confidence: 0.7,
    regime,
    rationale: ["Range regime", "No sufficiently asymmetric setup"]
  };
}
