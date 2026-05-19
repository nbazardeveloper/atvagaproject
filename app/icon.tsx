import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#36454F",
          color: "#F8F4F0",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
          fontSize: 34,
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