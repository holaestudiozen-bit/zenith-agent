# ZENITH

**Risk-first autonomous Solana agent for Steve Agent Arena.**

> Probabilistic intelligence. Deterministic safety.

ZENITH separates market analysis from transaction authority. A deterministic Risk Governor can veto every proposed action. **NO TRADE is a valid decision.**

## Architecture

```
Market
  |
  v
Analysis -> Regime -> Signal
                       |
                       v
                Risk Governor
                 /          \
              reject       approve
                |             |
                v             v
            Telemetry      Executor
                              |
                    Paper / OOBE live boundary
```

## Why this is competitive

ZENITH is intentionally not optimized for maximum trade count. It is built to preserve capital, make decisions explainable and show judges exactly *why* an action was accepted or rejected.

The deterministic layer enforces:
- 0.5% maximum risk budget per operation
- 2% daily loss stop
- maximum 3 simultaneous positions
- confidence gate
- liquidity gate
- slippage gate
- consecutive-loss cooldown
- CHAOS regime -> NO TRADE
- kill switch

## OOBE Protocol

The project uses the official `oobe-protocol` package as its Solana agent integration boundary. Live mode initializes `ConfigManager`, `OobeCore` and Solana tools only when explicitly requested.

Paper mode does **not** require a wallet, private key or paid transaction.

## Run the safe demo

```bash
npm install
npm test
npm run demo
```

The demo contains an acceptable trend setup plus unsafe scenarios that are rejected for volatility, liquidity or slippage.

## Live mode

Live mode is intentionally fail-closed. It requires local environment secrets and never stores them in Git:

```bash
ZENITH_MODE=live
SOLANA_PRIVATE_KEY=...
OPENAI_API_KEY=...
OOBE_API_KEY=...
```

Do **not** commit or paste those values into GitHub.

The final competition-specific transaction tool remains disabled until the exact Steve Agent Arena execution path is confirmed. This prevents the agent from guessing a tool or moving funds through an unverified path.

## Verification

GitHub Actions runs build, tests and the demo on every push.

## Submission package

See [SUBMISSION.md](./SUBMISSION.md) for the judge-facing pitch, differentiators and remaining competition checklist.

See [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) for architecture and operating rules.
