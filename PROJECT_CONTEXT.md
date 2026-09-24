# ZENITH — Project Context

ZENITH is an autonomous risk-first agent project prepared for Steve Agent Arena.

## Goal
Build a functional, auditable autonomous agent with deterministic risk controls and a competitive public submission.

## Core proposition
Probabilistic intelligence, deterministic safety.

## Architecture
- Scout: identifies candidate opportunities.
- Analyst: evaluates market regime, momentum, volatility, liquidity and confidence.
- Risk Guardian: evaluates proposed exposure.
- Risk Governor: hard deterministic gate that no model can bypass.
- Executor: executes only approved actions.
- Memory/Telemetry: records decisions, rejections, outcomes and risk metrics.

## Risk policy
Initial conservative defaults:
- Maximum risk budget per operation: 0.5% of managed capital.
- Daily loss stop: 2%.
- Maximum concurrent positions: 3.
- No averaging down.
- Liquidity and slippage gates.
- Cooldown after consecutive losses.
- Automatic kill switch.
- CHAOS regime permits NO TRADE as a valid decision.

All parameters remain configurable and must be validated before any real-capital use.

## Operating rules
- Never store private keys, seed phrases, passwords or API secrets in this repository.
- Never claim performance, winnings or payments without verifiable evidence.
- Real-money transactions require explicit human authorization.
- Development and testing should use simulation/test environments wherever possible.
- Keep this project completely separate from Estudio Zen.

## Competition
Prize pool discussed for Steve Agent Arena: 500 USDC total, with placement awards rather than a guaranteed payment. Current rules/deadlines must be re-verified before final submission.

## Workstreams already independent of ZENITH
Other bounty work is intentionally not part of this repository. ZENITH remains isolated.

## Status
Repository initialized. Architecture and implementation scaffold are next.
