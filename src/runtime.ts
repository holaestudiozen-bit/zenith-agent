import { defaultConfig } from "./config.js";
import { ZenithEngine } from "./engine.js";
import { PaperExecutor, type TradeExecutor } from "./executor.js";
import { OobeExecutor } from "./oobeAdapter.js";
import type { MarketSnapshot, PortfolioState } from "./types.js";

export interface RuntimeResult {
  decision: ReturnType<ZenithEngine["decide"]>;
  execution: Awaited<ReturnType<TradeExecutor["execute"]>>;
}

export async function createExecutor(): Promise<TradeExecutor> {
  const mode = process.env.ZENITH_MODE ?? defaultConfig.mode;

  if (mode !== "live") return new PaperExecutor();

  const privateKey = process.env.SOLANA_PRIVATE_KEY ?? "";
  const openAiKey = process.env.OPENAI_API_KEY ?? "";
  const oobeKey = process.env.OOBE_API_KEY;

  return OobeExecutor.connect({ privateKey, openAiKey, oobeKey });
}

export async function runDecision(
  market: MarketSnapshot,
  portfolio: PortfolioState,
  executor: TradeExecutor
): Promise<RuntimeResult> {
  const engine = new ZenithEngine({
    ...defaultConfig,
    mode: (process.env.ZENITH_MODE === "live" ? "live" : "paper")
  });

  const decision = engine.decide(market, portfolio);
  const execution = await executor.execute({
    signal: decision.signal,
    risk: decision.risk,
    maxNotionalUsd: decision.risk.maxRiskUsd
  });

  return { decision, execution };
}
