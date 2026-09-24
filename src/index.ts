import { defaultConfig } from "./config.js";
import { ZenithEngine } from "./engine.js";

console.log("ZENITH Risk-First Agent");
console.log("Mode:", defaultConfig.mode);
console.log("Risk governor: enabled");
console.log("Engine ready:", Boolean(new ZenithEngine(defaultConfig)));
