import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #F4EEE8 0%, #E6D8DA 100%)",
          color: "#1E252B",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#A35E70",
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          ATVAGA Designs
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            maxWidth: "76%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Permit-ready residential design for Washington State
          </div>
          <div
            style={{
              color: "#4F5D66",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.3,
            }}
          >
            ADUs, additions, remodels, and design drawing sets built for local approvals.
          </div>
        </div>
      </div>
    ),
    size
  );
}