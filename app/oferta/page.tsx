import { promises as fs } from "fs";
import path from "path";

import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import { Metadata } from "next";

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const OfertaPage = async () => {
  const jsonDir = path.join(process.cwd(), "data", "");
  const resHero = await fs.readFile(path.join(jsonDir, "hero.json"), "utf8");
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero
        title={hero[5].title}
        points={hero[5].points}
        imageUrl={hero[5].imageUrl}
      />
      <Logos />
      <section className="offer">
        <div className="offer__container">
          <h2>Nasza Oferta</h2>
          <p>
            Witamy w serwisie (zapewne ponowanie){" "}
            <strong>Pompy Ciepła 4 You</strong> - Twoim ekspertem w dziedzinie
            nowoczesnych i ekologicznych systemów ogrzewania i chłodzenia. Jest
            nam ogromnie miło, że możemy zaproponować kompleksowe rozwiązania,
            które nie tylko zwiększą komfort Twojego domu, ale również
            przyczynią się do ochrony środowiska i zmniejszenia Twoich rachunków
            za energię.
          </p>

          <h3>Wycena Twojej Inwestycji</h3>
          <p>
            Rozpocznij swoją przygodę z nowoczesnym ogrzewaniem od bezpłatnej
            konsultacji. Z przyjemnością przyjedziemy, aby ocenić Twoje potrzeby
            i przygotować szczegółowy kosztorys inwestycji w systemy pomp ciepła
            lub klimatyzatory. Z nami zawsze wiesz, na co idą Twoje pieniądze.
          </p>

          <h3>Instalacja Pomp Ciepła i Klimatyzatorów</h3>
          <p>
            Zaufaj doświadczeniu i profesjonalizmowi. Posiadamy wszystkie
            niezbędne certyfikaty, zajmiemy się montażem Twojej pompy ciepła lub
            klimatyzatora, zapewniając szybką i bezproblemową realizację
            projektu. Dzięki nam zyskasz nie tylko efektywne, ale i estetyczne
            rozwiązania dopasowane do Twojego domu.
          </p>

          <h3>Serwis i Konserwacja</h3>
          <p>
            Oferujemy pełen zakres usług serwisowych i konserwacyjnych, aby
            zapewnić długotrwałe i bezawaryjne działanie zainstalowanych
            systemów. Regularne przeglądy gwarantują nie tylko niezawodność, ale
            i maksymalną efektywność energetyczną Twojej instalacji.
          </p>

          <h3>Indywidualne Podejście</h3>
          <p>
            Każdy dom i każdy klient jest inny, dlatego do każdego projektu
            trzeba podejść indywidualnie, dopasowując rozwiązania do
            specyficznych potrzeb i oczekiwań. Niezależnie od tego, czy
            potrzebujesz systemu do nowego budynku, czy chcesz zmodernizować
            istniejącą instalację, jesteśmy tutaj, aby pomóc.
          </p>

          <h3>Gwarancja Satysfakcji</h3>
          <p>
            Za priorytet stawiamy zadowolenie naszych klientów, dlatego
            wszystkie nasze usługi i produkty są objęte gwarancją.
            Współpracujemy tylko z renomowanymi producentami, takimi jak Gree,
            Heiko, Haier, Rotenso, Panasonic czy Neoheat, aby zapewnić najwyższą
            jakość i niezawodność.
          </p>

          <h3>Zielona Energia w Zasięgu Ręki</h3>
          <p>
            Pompy ciepła to technologia przyszłości, która już dziś pozwala
            cieszyć się ekologicznym i ekonomicznym ogrzewaniem. Inwestując w
            pompę ciepła, nie tylko zredukujesz emisję dwutlenku węgla, ale
            również zmniejszysz swoje rachunki za energię, stając się bardziej
            niezależnym od zmiennych cen paliw kopalnych.
          </p>

          <p>
            Nie czekaj, zadbaj o swój dom i planetę już dziś. Skontaktuj się z
            nami, aby dowiedzieć się więcej o tym, jak możemy Ci pomóc. Czekamy
            na Twoje pytania i jesteśmy gotowi sprostać każdemu wyzwaniu. W
            stopce na każdej podstronie znajduje się fromularza kontaktowy.
            Bądźmy w kontakcie!
          </p>
          <p>
            <strong>Pompy Ciepła 4 You</strong> - Twoje ciepło, nasza pasja.
          </p>
        </div>
      </section>
    </>
  );
};

export default OfertaPage;

////////////////////////// Metadata

const title = "Nasza oferta | Pompy Ciepła 4 You | Ciepło z natury";
const description =
  "Poznaj nasze ekologiczne systemy ogrzewania i chłodzenia. Inwestuj w zdrowie domu i planety z Pompy Ciepła 4 You.";
const siteUrl = "https://pompyciepla4you.pl";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    applicationName: "Pompy Ciepła 4 You",
    referrer: "origin-when-cross-origin",
    keywords: [
      "oferta pomp ciepła",
      "klimatyzator",
      "pompa ciepła",
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
