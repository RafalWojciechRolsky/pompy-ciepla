import { promises as fs } from "fs";
import path from "path";

import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Gree from "@/components/Producers/Gree/Gree";
import Haier from "@/components/Producers/Haier/Haier";
import Heiko from "@/components/Producers/Heiko/Heiko";
import Neoheat from "@/components/Producers/Neoheat/Neoheat";
import Panasonic from "@/components/Producers/Panasonic/Panasonic";
import Rosento from "@/components/Producers/Rosento/Rosento";
import { Metadata } from "next";

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const ProducenciPage = async () => {
  const jsonDir = path.join(process.cwd(), "data", "");
  const resHero = await fs.readFile(path.join(jsonDir, "hero.json"), "utf8");
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero
        title={hero[2].title}
        points={hero[2].points}
        imageUrl={hero[2].imageUrl}
      />
      <Logos />
      <section className="producers">
        <Neoheat />
        <Haier />
        <Gree />
        <Rosento />
        <Panasonic />
        <Heiko />
      </section>
    </>
  );
};

export default ProducenciPage;

////////////////////////// Metadata

const title = "Producenci pomp ciepła | Pompy Ciepła 4 You | Ciepło z natury";
const description =
  "Poznaj producentów pomp ciepła na Pompy Ciepła 4 You. Dowiedz się o ekologicznych i energooszczędnych rozwiązaniach, które oferują czołowi producenci";
const siteUrl = "https://pompyciepla4you.pl";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    applicationName: "Pompy Ciepła 4 You",
    referrer: "origin-when-cross-origin",
    keywords: [
      "czołowi producenci pomp ciepła",
      "klimatyzatory",
      "ekologiczne ogrzewanie",
      "oszczędność energii",
      "redukcja CO2",
    ],
    authors: [{ name: "Pompy Ciepła 4 You", url: siteUrl }],
    creator: "Pompy Ciepła 4 You",
    publisher: "Pompy Ciepła 4 You",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: siteUrl,
      siteName: "Pompy Ciepła 4 You",
      images: [
        {
          url: `/images/openGraph.jpg`,
          width: 1200,
          height: 630,
          alt: "Pompy Ciepła 4 You - Ciepło z natury",
        },
      ],
      locale: "pl_PL",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@PompyCiepla4You",
      images: [
        {
          url: `/images/twitter.jpg`,
          width: 1200,
          height: 675,
          alt: "Pompy Ciepła 4 You - Ciepło z natury",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
