export interface DecisionEvent {
  at: string;
  symbol: string;
  decision: string;
  reason: string;
  confidence: number;
  riskUsd: number;
}

export class Telemetry {
  private events: DecisionEvent[] = [];
  record(event: Omit<DecisionEvent, "at">): DecisionEvent {
    const saved = { ...event, at: new Date().toISOString() };
    this.events.push(saved);
    return saved;
  }
  all(): readonly DecisionEvent[] { return this.events; }
}
