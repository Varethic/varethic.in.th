import { ImageResponse } from "next/og";

export const alt = "Varethic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0a0a0a", color: "#ededef" }}>
                <div style={{ fontSize: 96, fontWeight: 700 }}>Varethic</div>
                <div style={{ marginTop: 24, fontSize: 40, color: "#c4c4cc" }}>We build the software and run it in the cloud.</div>
            </div>
        ),
        size,
    );
}
