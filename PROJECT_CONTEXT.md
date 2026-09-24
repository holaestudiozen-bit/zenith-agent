# ZENITH — Project Context

ZENITH is an autonomous risk-first Solana agent prepared for Steve Agent Arena.

## Goal
Build a functional, auditable autonomous agent with deterministic risk controls and a competitive public submission.

## Core proposition
**Probabilistic intelligence, deterministic safety.**

## Architecture
- Scout / Analysis: identifies candidate opportunities.
- Regime classifier: TREND, RANGE or CHAOS.
- Risk Governor: hard deterministic gate that no model can bypass.
- Executor: paper-mode executor plus a fail-closed OOBE Protocol live adapter.
- Memory / Telemetry: records decisions, rejections, outcomes and risk metrics.

## Risk policy
- Maximum risk budget per operation: 0.5% of managed capital.
- Daily loss stop: 2%.
- Maximum concurrent positions: 3.
- No averaging down.
- Liquidity and slippage gates.
- Cooldown after consecutive losses.
- Automatic kill switch.
- CHAOS regime permits NO TRADE as a valid decision.

## OOBE integration
The repository uses the official OOBE Protocol SDK package (v2.0.2). Live initialization is isolated behind `src/oobeAdapter.ts` and loaded only when live mode is explicitly selected.

Private keys and API keys remain local environment variables and are never stored in the repository.

The concrete Steve Agent Arena transaction call is deliberately not guessed. Live execution remains fail-closed until the official Arena action path is verified.

## Operating rules
- Never store private keys, seed phrases, passwords or API secrets in this repository.
- Never claim performance, winnings or payments without verifiable evidence.
- Real-money transactions require explicit human authorization.
- Development and demonstrations default to simulation/paper mode.
- Keep this project completely separate from Estudio Zen.

## Competition facts last verified 2026-09-24
- Steve Agent Arena is a global Superteam bounty by OOBE Protocol.
- Total prizes: 500 USDC.
- Awards displayed: 250 USDC / 150 USDC / 100 USDC.
- Superteam displayed 45 submissions.
- Winner announcement is scheduled for October 4, 2026.

## Current status
- Public repository: ready.
- Core strategy: implemented.
- Risk Governor: implemented.
- Paper executor: implemented.
- Tests: implemented.
- CI: configured.
- OOBE integration boundary: implemented.
- Submission document: implemented.
- Live Arena binding: blocked only on confirmation of the exact competition execution flow and human-authorized wallet/API credentials if required.
