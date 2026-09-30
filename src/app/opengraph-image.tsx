import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoSvg = await readFile(
    path.join(process.cwd(), "public/brand/drip_logo_color.svg")
  );
  const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

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
          padding: "64px 80px",
          background:
            "linear-gradient(160deg, #F2E7F9 0%, #E8C4FA 45%, #780AC1 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Drip"
          width={240}
          height={139}
          style={{ marginBottom: 24 }}
        />
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
