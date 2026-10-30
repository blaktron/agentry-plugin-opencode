// OpenCode server plugin. It adds the bundled Agentry MCP server and the
// Agentry skill to OpenCode's configuration while the plugin is enabled. An
// MCP server or skill the person configured under the same name wins: the
// plugin never replaces either. OpenCode asks the person through MCP
// elicitation before the server carries out a previewed operation.
//
// The object has the shape OpenCode's plugin `define` returns, so the
// package needs no runtime dependency.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const server = fileURLToPath(new URL("./server/agentry-mcp.mjs", import.meta.url));
const skillPath = fileURLToPath(new URL("./skills/agentry/SKILL.md", import.meta.url));

function skillContent() {
  const text = readFileSync(skillPath, "utf8");
  const m = /^---\n[\s\S]*?\n---\n([\s\S]*)$/.exec(text);
  return m ? m[1] : text;
}

export default {
  id: "agentry",
  async setup(ctx) {
    await ctx.mcp.transform((mcp) => {
      if (!mcp.get("agentry")) mcp.set("agentry", { type: "local", command: ["node", server] });
    });
    await ctx.skill.transform((skills) => {
      if (skills.get("agentry")) return;
      skills.add({
        id: "agentry",
        name: "agentry",
        description:
          "Find, verify, install and run Agentry QuickAgents with consent and receipts, and build, validate, review and test your own.",
        path: skillPath,
        content: skillContent(),
      });
    });
  },
};
