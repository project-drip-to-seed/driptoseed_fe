import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(160deg, #F2E7F9 0%, #E8C4FA 45%, #780AC1 100%)",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#780AC1",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Drip
        </div>
        <div
          style={{
            fontStyle: "italic",
            fontSize: 88,
            color: "#1a1a1a",
            lineHeight: 1.2,
            maxWidth: 980,
          }}
        >
          Grow Beyond Algorithms
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#3d3d3d",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Strategic content seeding, clipping, and distribution for creators.
        </div>
      </div>
    ),
    size
  );
}
