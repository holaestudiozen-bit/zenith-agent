# ZENITH

**Risk-first autonomous agent for Steve Agent Arena.**

> Probabilistic intelligence. Deterministic safety.

ZENITH separates market analysis from transaction authority. A deterministic Risk Governor can veto every proposed action. **NO TRADE is a valid decision.**

## Pipeline

```
Market -> Analysis -> Regime -> Signal -> Risk Governor -> Executor
                                  |
                                  +-> reject + reason + telemetry
```

Current implementation is deliberately **paper mode**. It does not execute real-money transactions.

## Hard risk controls

- 0.5% maximum risk budget per operation
- 2% daily loss stop
- 3 concurrent positions maximum
- confidence, liquidity and slippage gates
- consecutive-loss cooldown
- CHAOS regime -> NO TRADE
- kill switch

## Run

```bash
npm install
npm test
npm run demo
```

The demo includes an acceptable trend setup and deliberately unsafe scenarios that must be rejected, making the safety layer observable.

## Security

Never commit wallet private keys, seed phrases, API tokens or other secrets. Live execution remains disabled until the competition integration is verified and any required human authorization is explicitly approved.

See [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).
