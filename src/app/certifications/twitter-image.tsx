import { ImageResponse } from "next/og";
import { OGImage } from "@/components/og-image";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Certifications - Dipak Rathod";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "nodejs";

// Image generation
export default async function Image() {
  // Load the icon.svg from public directory
  const iconData = await readFile(join(process.cwd(), "public/icon.svg"));
  const iconSrc = `data:image/svg+xml;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <OGImage
        title="Certifications"
        description="Professional certifications in Cloud Computing, DevOps, AWS, Azure, Kubernetes, and Infrastructure technologies."
        category="Learning Journey"
        logoSrc={iconSrc}
      />
    ),
    {
      ...size,
    }
  );
}
