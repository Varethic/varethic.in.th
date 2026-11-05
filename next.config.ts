import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        agentFeedback: true,
    },
    cacheComponents: true,
    partialPrefetching: true,
    turbopack: {
        rules: {
            // Tailwind only on plain CSS. Sending *.module.css through this
            // loader strips CSS Module scoping and leaves styles.* empty.
            "*.css": {
                condition: { not: { path: /\.module\.css$/ } },
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;
