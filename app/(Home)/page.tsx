import { promises as fs } from "fs";
import path from "path";

import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Movies from "@/components/Movies";
import Question from "@/components/Question";
import Services from "@/components/Services/Services";
import { Metadata } from "next";

interface QuestionType {
  id: number;
  title: string;
  body: string[];
  links: boolean;
  textOnLeft: boolean;
  backgroundColor: string;
  imageUrl: string;
}

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const HomePage = async () => {
  const jsonDir = path.join(process.cwd(), "data", "");
  const resQuestions = await fs.readFile(
    path.join(jsonDir, "questions.json"),
    "utf8"
  );
  const resHero = await fs.readFile(path.join(jsonDir, "hero.json"), "utf8");
  const questions: QuestionType[] = JSON.parse(resQuestions);
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero
        title={hero[0].title}
        points={hero[0].points}
        imageUrl={hero[0].imageUrl}
      />
      <Logos />
      {questions.map((question) => (
        <Question
          key={question.id}
          title={question.title}
          body={question.body}
          links={question.links}
          textOnLeft={question.textOnLeft}
          backgroundColor={question.backgroundColor}
          imageUrl={question.imageUrl}
        />
      ))}
      <Movies />
      <Services />
    </>
  );
};

export default HomePage;

////////////////////////// Metadata

const title = "Start | Pompy Ciepła 4 You | Ciepło z natury";
const description =
  "Zaoszczędź na ogrzewaniu i zredukuj emisję CO2 dzięki nowoczesnym i ekologicznym pompom ciepła. Skontaktuję się z nami w celu uzyskania najlepszych wyników.";
const siteUrl = "https://pompyciepla4you.pl";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    applicationName: "Pompy Ciepła 4 You",
    referrer: "origin-when-cross-origin",
    keywords: [
      "pompy ciepła",
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
