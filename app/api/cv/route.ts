import React from "react";
import { NextRequest } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { getPortfolioData } from "@/lib/data";
import type { DataLocale } from "@/lib/data";
import { CvDocument } from "@/components/cv/CvDocument";

export async function GET(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get("locale");
  const locale: DataLocale =
    localeParam === "en" || localeParam === "fr" ? localeParam : "fr";
  const data = getPortfolioData(locale);
  const element = React.createElement(CvDocument, { data, locale });
  // CvDocument renders <Document>; cast needed for react-pdf's strict DocumentProps type
  const buffer = await renderToBuffer(element as Parameters<typeof renderToBuffer>[0]);
  const filename = "CV-Alexandre-Pascal.pdf";
  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(buffer.length),
    },
  });
}
