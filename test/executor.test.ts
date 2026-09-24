import test from "node:test";
import assert from "node:assert/strict";
import { PaperExecutor } from "../src/executor.js";

test("paper executor refuses a rejected trade", async () => {
  const executor = new PaperExecutor();
  const result = await executor.execute({
    signal: {
      symbol: "SOL/USDC",
      side: "BUY",
      confidence: 0.9,
      regime: "TREND",
      rationale: []
    },
    risk: {
      approved: false,
      reason: "DAILY_LOSS_STOP",
      maxRiskUsd: 0
    },
    maxNotionalUsd: 0
  });

  assert.equal(result.executed, false);
  assert.equal(result.reason, "DAILY_LOSS_STOP");
});

test("paper executor never creates a live transaction", async () => {
  const executor = new PaperExecutor();
  const result = await executor.execute({
    signal: {
      symbol: "SOL/USDC",
      side: "BUY",
      confidence: 0.9,
      regime: "TREND",
      rationale: []
    },
    risk: {
      approved: true,
      reason: "RISK_CHECKS_PASSED",
      maxRiskUsd: 5
    },
    maxNotionalUsd: 5
  });

  assert.equal(result.executed, true);
  assert.equal(result.mode, "paper");
  assert.match(result.reference ?? "", /^paper:/);
});
