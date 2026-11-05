import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// buildCommand stops OpenNext from re-running the "build" script, which now calls OpenNext itself
export default { ...defineCloudflareConfig(), buildCommand: "next build" };
