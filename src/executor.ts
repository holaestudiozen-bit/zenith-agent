import type { RiskDecision, Signal } from "./types.js";

export interface ExecutionRequest {
  signal: Signal;
  risk: RiskDecision;
  maxNotionalUsd: number;
}

export interface ExecutionResult {
  executed: boolean;
  mode: "paper" | "live";
  reference?: string;
  reason: string;
}

export interface TradeExecutor {
  execute(request: ExecutionRequest): Promise<ExecutionResult>;
}

export class PaperExecutor implements TradeExecutor {
  async execute(request: ExecutionRequest): Promise<ExecutionResult> {
    if (!request.risk.approved || request.signal.side === "NO_TRADE") {
      return { executed: false, mode: "paper", reason: request.risk.reason };
    }

    return {
      executed: true,
      mode: "paper",
      reference: `paper:${request.signal.symbol}:${request.signal.side}`,
      reason: "PAPER_EXECUTION_ONLY"
    };
  }
}
