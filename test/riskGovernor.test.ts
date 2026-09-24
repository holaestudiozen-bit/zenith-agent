import test from "node:test";
import assert from "node:assert/strict";
import { defaultConfig } from "../src/config.js";
import { RiskGovernor } from "../src/riskGovernor.js";
import { MarketSnapshot, PortfolioState, Signal } from "../src/types.js";

const market: MarketSnapshot = { symbol:"SOL/USDC", price:150, momentum:.8, volatility:.4, liquidityUsd:1_000_000, expectedSlippageBps:10 };
const signal: Signal = { symbol:"SOL/USDC", side:"BUY", confidence:.9, regime:"TREND", rationale:[] };
const portfolio: PortfolioState = { equityUsd:1000, dailyPnlUsd:0, openPositions:0, consecutiveLosses:0, killSwitch:false };

test("approves bounded high-confidence setup", () => {
  const result = new RiskGovernor(defaultConfig).evaluate(signal, market, portfolio);
  assert.equal(result.approved, true);
  assert.equal(result.maxRiskUsd, 5);
});

test("kill switch cannot be bypassed", () => {
  const result = new RiskGovernor(defaultConfig).evaluate(signal, market, {...portfolio, killSwitch:true});
  assert.equal(result.approved, false);
  assert.equal(result.reason, "KILL_SWITCH_ACTIVE");
});

test("chaos regime cannot trade", () => {
  const result = new RiskGovernor(defaultConfig).evaluate({...signal, regime:"CHAOS"}, market, portfolio);
  assert.equal(result.approved, false);
});
