import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// buildCommand stops OpenNext from re-running the "build" script, which now calls OpenNext itself
export default { ...defineCloudflareConfig({ incrementalCache: staticAssetsIncrementalCache }), buildCommand: "next build" };
