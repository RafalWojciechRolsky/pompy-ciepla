import { promises as fs } from "fs";
import path from "path";

import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import { Metadata } from "next";
import Image from "next/image";

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const KlimatyzatoryPage = async () => {
  const jsonDir = path.join(process.cwd(), "data", "");
  const resHero = await fs.readFile(path.join(jsonDir, "hero.json"), "utf8");
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero
        title={hero[4].title}
        points={hero[4].points}
        imageUrl={hero[4].imageUrl}
      />
      <Logos />
      <section className="airConditioners">
        <div className="airConditioners__container">
          <h2>Czym są i jak działają klimatyzatory</h2>
          <p>
            Klimatyzacja stała się nieodłącznym elementem naszego życia,
            zapewniając komfort termiczny w gorące dni i nie tylko. Ale czy
            kiedykolwiek zastanawiałeś się, jak dokładnie działają te urządzenia
            i jakie są różnice między klimatyzatorami a pompami ciepła? W tym
            wpisie przybliżymy budowę, działanie oraz rodzaje klimatyzatorów, a
            także wyjaśnimy, w jaki sposób nowoczesne technologie, takie jak
            klimatyzatory inwerterowe, łączą w sobie funkcje chłodzenia i
            ogrzewania. Jeśli chcesz dowiedzieć się więcej o tajnikach
            klimatyzacji i wyborze odpowiedniego urządzenia do Twojego domu czy
            biura, koniecznie przeczytaj dalej!
          </p>
          <Image
            alt=""
            src="/images/Image-306.jpg"
            width={600}
            height={380}
            className="climaSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <h3>Budowa i działanie klimatyzatora</h3>
          <p>Podstawowe elementy klimatyzatora to:</p>
          <ul>
            <li>sprężarka </li>
            <li>parownik </li>
            <li>skraplacz</li>
            <li>wentylator</li>
          </ul>
          <p>
            W parowniku następuje odparowanie czynnika chłodniczego, który
            pochłania ciepło z pomieszczenia. Następnie czynnik ten jest
            sprężany w sprężarce, co powoduje wzrost jego temperatury. Sprężony
            czynnik jest przetłaczany do skraplacza, który znajduje się na
            zewnątrz budynku. W skraplaczu ciepło z czynnika jest oddawane do
            powietrza zewnętrznego, a czynnik skrapla się i staje cieczą. Ciecz
            dostaje się do elementu rozprężnego, gdzie jest dławiona, co
            powoduje zmniejszenie jej ciśnienia i temperatury. Schłodzony
            czynnik w postaci cieczy ponownie zostaje podany na parownik, gdzie
            się ogrzewa od powietrza w pomieszczeniu i przechodzi w stan gazowy.
          </p>
          <Image
            alt=""
            src="/images/Image-303.jpg"
            width={600}
            height={380}
            className="climaSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <h3>Rodzaje klimatyzatorów</h3>
          <p>
            Klimatyzatory dzielą się na różne typy, w zależności od budowy i
            rozwiązań montażowych. Najpopularniejsze są klimatyzatory typu
            split, które składają się z dwóch jednostek – wewnętrznej i
            zewnętrznej – połączonych ze sobą linią chłodniczą. W obrębie
            klimatyzatorów typu split i multi-split można wyróżnić następujące
            rodzaje klimatyzacji:
          </p>
          <Image
            alt=""
            src="/images/Image-304.jpg"
            width={600}
            height={380}
            className="climaSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <ul>
            <li>klimatyzatory ścienne</li>
            <li>klimatyzatory ścienno-przysufitowe</li>
            <li>klimatyzatory przypodłogowe, klimatyzatory</li>
            <li>kasetonowe, klimatyzatory kanałowe</li>
          </ul>
          <p>
            Wybór konkretnego rodzaju klimatyzacji zależy od indywidualnych
            preferencji oraz efektu wizualnego, jaki chcemy osiągnąć.
          </p>
          <Image
            alt=""
            src="/images/Image-307.jpg"
            width={600}
            height={380}
            className="climaSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <h4>Klimatyzatory multi-split</h4>
          <p>
            Klimatyzatory typu multi-split to urządzenia klimatyzacyjne
            zbudowane tak samo jak klimatyzatory typu split, ale do jednej
            jednostki zewnętrznej podłącza się wiele jednostek wewnętrznych.
            Pozwala to na schładzanie powietrza w kilku pomieszczeniach
            jednocześnie z pomocą jednej instalacji.
          </p>
          <h4>Klimatyzatory przenośne</h4>
          <p>
            Klimatyzatory przenośne to urządzenia, które mają wszystkie
            podzespoły (parownik, skraplacz, sprężarka, zawór rozprężny i
            wentylator) w jednej obudowie. Są one łatwe do przenoszenia pomiędzy
            różnymi pomieszczeniami, ale generują większy hałas w czasie pracy i
            mają niższą wydajność niż klimatyzatory stacjonarne.
          </p>
          <Image
            alt=""
            src="/images/Image-301.jpg"
            width={600}
            height={380}
            className="climaSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <h4>Klimatyzatory jako pompy ciepła</h4>
          <p>
            Warto zauważyć, że klimatyzatory mogą również działać jako pompy
            ciepła, dzięki odwróceniu układu chłodniczego. W takim przypadku
            parownik staje się skraplaczem, co pozwala na ogrzewanie
            pomieszczenia.
          </p>
          <Image
            alt=""
            src="/images/Image-305.jpg"
            width={600}
            height={380}
            className="climaSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <h3>Czyli klimatyzatory to to samo co pompy ciepła?</h3>
          <p>
            Klimatyzatory i pompy ciepła to nie są tożsame urządzenia, choć mają
            wiele wspólnych cech i mogą pełnić podobne funkcje. Obie te
            technologie wykorzystują procesy termodynamiczne do przenoszenia
            ciepła, ale różnią się w sposobie, w jaki to robią i w zakresie ich
            zastosowań.
          </p>
          <h4>Różnice między klimatyzatorami a pompami ciepła</h4>
          <p>
            Klimatyzator to urządzenie, które służy głównie do chłodzenia
            pomieszczeń poprzez usuwanie ciepła z powietrza wewnętrznego i
            odprowadzanie go na zewnątrz. Klimatyzatory mogą również poprawiać
            jakość powietrza poprzez filtrację oraz usuwanie bakterii i grzybów.
            Klimatyzatory rozprowadzają chłód po pomieszczeniu bezpośrednio
            nadmuchowo.
          </p>
          <p>
            Z drugiej strony, pompa ciepła to urządzenie, które może służyć do
            chłodzenia i ogrzewania pomieszczeń poprzez wykorzystanie ciepła z
            zewnętrznych źródeł, takich jak powietrze, woda czy gleba. Pompy
            ciepła są bardziej wszechstronne niż klimatyzatory, ponieważ mogą
            być wykorzystywane nie tylko do chłodzenia, ale także do ogrzewania
            pomieszczeń oraz przygotowania ciepłej wody użytkowej. Pompy ciepła
            rozprowadzają chłód poprzez czynnik pośredni, czyli wodę krążącą w
            instalacji.
          </p>
          <Image
            alt=""
            src="/images/Image-308.jpg"
            width={600}
            height={380}
            className="climaSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <h4>Nowoczesne klimatyzatory inwerterowe</h4>
          <p>
            Warto zauważyć, że niektóre nowoczesne klimatyzatory, zwane
            klimatyzatorami inwerterowymi, wykorzystują technologię pomp ciepła
            do chłodzenia i ogrzewania pomieszczeń.
          </p>
          <h3>Podsumowanie</h3>
          <p>
            Podsumowując, klimatyzatory i pompy ciepła to różne urządzenia,
            które mogą pełnić podobne funkcje, ale różnią się w sposobie, w jaki
            to robią i w zakresie ich zastosowań. Wybór między nimi zależy od
            indywidualnych potrzeb i preferencji, a także od specyfiki budynku,
            w którym mają być zainstalowane.
          </p>
        </div>
      </section>
    </>
  );
};

export default KlimatyzatoryPage;

////////////////////////// Metadata

const title = "Klimatyzatory | Pompy Ciepła 4 You | Ciepło z natury";
const description =
  "Poznaj zaawansowane technologie klimatyzacji, które zapewniają komfort termiczny i efektywność energetyczną w Twoim domu czy biurze.";
const siteUrl = "https://pompyciepla4you.pl";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    applicationName: "Pompy Ciepła 4 You",
    referrer: "origin-when-cross-origin",
    keywords: [
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
