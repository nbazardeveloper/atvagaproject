import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#36454F",
          borderRadius: 36,
          color: "#F8F4F0",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        A
      </div>
    ),
    size
  );
}