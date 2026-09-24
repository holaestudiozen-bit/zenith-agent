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

## Safe demo
```bash
npm install
npm test
npm run demo
```

The demo contains:
1. an acceptable trend setup,
2. an extreme-volatility setup that must be rejected,
3. a poor-liquidity/high-slippage setup that must be rejected.

## Verified competition requirements — 2026-09-24
Superteam / OOBE currently require:
- Create and onboard a Steve Agent.
- Set agent handle, display name and avatar.
- Connect an X account.
- Publish at least one public X post explaining the agent, workflows/tools, strategy and results/lessons.
- Follow/tag @SteveTheAgentAI and @OOBEonSol.
- Reach at least 2,000 Arena XP before closing.
- Complete at least 5 qualifying Solana Mainnet trades through the Steve Agent wallet.
- Qualifying activity includes Adrena perps, Phoenix perps and Jupiter/MagicBlock swaps of at least 20 USDC.
- Do not wash trade, self-deal or use artificial transaction loops.

Current structured deadline: **2026-10-01 21:59:59 UTC**.
Evaluation is scheduled for October 2–3 and winner announcement for October 4.

## Judging
- Agent strategy and trading quality: 30%
- Creative use of Steve: 30%
- Arena activity and ecosystem exploration: 20%
- Content and community contribution: 20%

Positive PnL is not required by the listing; risk management and meaningful activity matter.

## Superteam submission fields
The public listing requires:
- Steve Agent handle.
- Link to the required X post.
- Short description of the agent, use case, tools/protocols explored and strategy.

## Security model
Private keys and API keys are never committed. Live mode reads secrets only from the local environment. The OOBE SDK is loaded lazily, so paper mode never needs wallet material.

## Repository
https://github.com/holaestudiozen-bit/zenith-agent

## Execution checklist
- [x] Public GitHub repository
- [x] Runnable paper-mode demo
- [x] Automated tests
- [x] Deterministic Risk Governor
- [x] OOBE SDK integration boundary
- [x] Secrets excluded from Git
- [x] Competition requirements verified
- [ ] Human OAuth sign-in to Steve
- [ ] Create/configure ZENITH inside Steve
- [ ] Connect required X account
- [ ] Reach 2,000 Arena XP
- [ ] Complete 5 qualifying Mainnet trades with explicit human approval of capital/risk
- [ ] Publish required public X post
- [ ] Submit through Superteam
