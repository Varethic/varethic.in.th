import type { MetadataRoute } from "next";

const paths = ["", "/about", "/project", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
    return paths.map((path) => ({ url: `https://varethic.in.th${path}`, priority: path === "" ? 1 : 0.7 }));
}
