import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

// The picture shown when a case study's link is shared (Facebook, LinkedIn, WhatsApp, X, Slack...). Each case study
// gets its own, with its own headline, instead of the generic site image.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Drip case study";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  const logoSvg = await readFile(path.join(process.cwd(), "public/brand/drip_logo_color.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  const headline = study?.title ?? "Creator Growth Case Study";
  const creator = study?.creator ?? "Drip";
  const category = study?.category ?? "Case study";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 80px",
          background: "linear-gradient(160deg, #F2E7F9 0%, #E8C4FA 45%, #780AC1 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Drip" width={150} height={87} />
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              background: "#780AC1",
              color: "#ffffff",
              fontSize: 28,
            }}
          >
            {`Case study · ${category}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontStyle: "italic",
              fontSize: headline.length > 40 ? 76 : 88,
              color: "#1a1a1a",
              lineHeight: 1.15,
              maxWidth: 1040,
            }}
          >
            {headline}
          </div>
          <div style={{ fontSize: 34, color: "#3d3d3d", marginTop: 28 }}>{creator}</div>
        </div>

        <div style={{ fontSize: 28, color: "#ffffff" }}>Drip · Grow Beyond Algorithms</div>
      </div>
    ),
    size,
  );
}
