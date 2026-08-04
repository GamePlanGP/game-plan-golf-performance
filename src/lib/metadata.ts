import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "./constants";

const BASE_URL = "https://gameplangolf.com"; // [REPLACE] Update with actual domain

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description || SITE_DESCRIPTION;
  const ogImage = {
    url: `${BASE_URL}/og-logo.png`,
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  };

  const baseKeywords = [
    "golf lessons San Marcos",
    "golf performance San Marcos",
    "GC Quad golf fitting San Diego",
    "golf personal training North County San Diego",
    "golf coaching San Diego",
    "golf simulator San Marcos",
    "golf practice membership",
  ];

  return {
    title: fullTitle,
    description: desc,
    keywords: [...baseKeywords, ...keywords],
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${BASE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}
