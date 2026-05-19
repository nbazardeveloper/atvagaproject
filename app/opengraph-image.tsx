import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #36454F 0%, #202A31 100%)",
          color: "#F8F4F0",
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
            color: "#E9C7CD",
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.24em",
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
            maxWidth: "78%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Residential Design Drawings &amp; Permit Services
          </div>
          <div
            style={{
              color: "#D8D1CB",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.3,
            }}
          >
            Serving Seattle, Bellevue, Kirkland, Redmond, Tacoma, Renton, Everett, and surrounding Washington communities.
          </div>
        </div>
      </div>
    ),
    size
  );
}