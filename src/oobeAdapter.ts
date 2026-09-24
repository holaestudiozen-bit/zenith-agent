import type { ExecutionRequest, ExecutionResult, TradeExecutor } from "./executor.js";

export interface OobeSecrets {
  privateKey: string;
  openAiKey: string;
  oobeKey?: string;
}

/**
 * Thin boundary around the official OOBE SDK.
 *
 * Important:
 * - No key is ever persisted here.
 * - This adapter is only constructed in explicit live mode.
 * - Risk approval is checked again immediately before any SDK call.
 */
export class OobeExecutor implements TradeExecutor {
  private constructor(
    private readonly core: any,
    private readonly tools: any[]
  ) {}

  static async connect(secrets: OobeSecrets): Promise<OobeExecutor> {
    if (!secrets.privateKey || !secrets.openAiKey) {
      throw new Error("LIVE_MODE_REQUIRES_LOCAL_SECRETS");
    }

    const mod: any = await import("oobe-protocol");
    const ConfigManager = mod.ConfigManager;
    const OobeCore = mod.OobeCore;

    if (!ConfigManager || !OobeCore) {
      throw new Error("OOBE_SDK_EXPORTS_NOT_FOUND");
    }

    const configManager = new ConfigManager();
    const config = configManager.createDefaultConfig(
      secrets.privateKey,
      secrets.openAiKey,
      secrets.oobeKey ?? ""
    );

    const core = new OobeCore(config);
    await core.start();

    const agent = core.getAgent();

    // OOBE's tool factory is exposed through a package subpath in the
    // official SDK. Import lazily so paper mode has zero wallet dependency.
    const toolsMod: any = await import("oobe-protocol/config/tool/index.tool");
    const tools = await toolsMod.createSolanaTools(agent);

    return new OobeExecutor(core, tools);
  }

  async execute(request: ExecutionRequest): Promise<ExecutionResult> {
    if (!request.risk.approved || request.signal.side === "NO_TRADE") {
      return { executed: false, mode: "live", reason: request.risk.reason };
    }

    // Safety boundary: ZENITH does not guess a trading tool or submit funds
    // automatically. The exact Arena-compatible tool call is wired only after
    // the official competition flow is confirmed.
    return {
      executed: false,
      mode: "live",
      reason: "LIVE_TOOL_BINDING_PENDING_ARENA_CONFIRMATION"
    };
  }

  async stop(): Promise<void> {
    await this.core.stop();
  }

  toolCount(): number {
    return this.tools.length;
  }
}
