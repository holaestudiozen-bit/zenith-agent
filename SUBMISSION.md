# ZENITH — Steve Agent Arena submission package

## One-line pitch
ZENITH is a risk-first autonomous Solana agent that separates probabilistic market intelligence from deterministic transaction authority.

## Why it is different
Most trading agents optimize for activity. ZENITH treats **NO TRADE** as a valid action and gives a deterministic Risk Governor final authority over every proposed transaction.

## Demonstrable features
- Market regime classification: TREND / RANGE / CHAOS
- Deterministic confidence, liquidity and slippage gates
- 0.5% per-operation risk budget
- 2% daily loss stop
- Maximum three simultaneous positions
- Loss cooldown
- Kill switch
- Explicit rejection telemetry
- Paper executor for safe demos
- OOBE Protocol integration boundary for Solana execution

## Demo
```bash
npm install
npm test
npm run demo
```

The demo contains:
1. an acceptable trend setup,
2. an extreme-volatility setup that must be rejected,
3. a poor-liquidity/high-slippage setup that must be rejected.

## Security model
Private keys and API keys are never committed. Live mode reads secrets only from the local environment. The OOBE SDK is loaded lazily, so paper mode never needs wallet material.

## Live-mode boundary
The official OOBE Protocol SDK is integrated as the Solana agent runtime boundary. ZENITH deliberately does not invent or guess the final Arena transaction call. The concrete live tool binding is enabled only after the official Steve Agent Arena execution path is confirmed.

## Repository
https://github.com/holaestudiozen-bit/zenith-agent

## Submission evidence checklist
- [x] Public GitHub repository
- [x] Runnable paper-mode demo
- [x] Automated tests
- [x] Deterministic risk governor
- [x] OOBE SDK integration layer
- [x] Secrets excluded from Git
- [ ] Competition-specific live binding confirmed
- [ ] Human-authorized Solana wallet available locally
- [ ] Final Arena activity/evidence captured
- [ ] Superteam submission sent
