import { Metadata } from "next";

const PrivacyPolicyPage = async () => {
  return (
    <>
      <section className="privacyPolicy">
        <div className="privacyPolicy__container">
          <h1>Polityka Prywatności</h1>
          <h2>Pompa Ciepła 4 You</h2>
          <dl>
            <div>
              <dd>
                ul. Nawoja 20
                <br />
                Nawojowa Góra
                <br />
                32-065, Polska
              </dd>

              <span>
                <dd>676-169-90-92</dd>
              </span>
            </div>
            <div>
              <dd>
                <a href="tel:+48609116300">+48 609-116-300</a>
              </dd>

              <dd>
                <a href="mailto:kswwop@gmail.com">kswwop@gmail.com</a>
              </dd>
            </div>
          </dl>

          <h3>1. Wprowadzenie</h3>
          <p>
            Firma <strong>KSW Andrzej Wolak</strong> (zwana dalej
            &quot;Firmą&quot;) zobowiązuje się do ochrony prywatności swoich
            klientów i użytkowników serwisu. Niniejsza Polityka Prywatności
            określa zasady przetwarzania i ochrony danych osobowych
            przekazywanych przez Użytkowników w związku z korzystaniem z usług
            firmy.
          </p>

          <h3>2. Administrator danych</h3>
          <p>
            Administratorem danych osobowych na stronie <strong>Pompa Ciepła 4 You</strong> jest{" "}
            <strong>KSW Andrzej Wolak</strong> z siedzibą przy ul. Nawoja 20,
            Nawojowa Góra, 32-065; Polska.
          </p>

          <h3>3. Zakres i cel przetwarzania danych</h3>
          <p>
            Dane osobowe przetwarzane są w celu realizacji usług oferowanych
            przez Firmę, w tym m.in. w celu obsługi zapytań klientów, realizacji
            umów sprzedaży, prowadzenia działań marketingowych, zgodnie z
            wyrażonymi zgodami. Dane mogą być również przetwarzane w celu
            wypełnienia obowiązków prawnych ciążących na Firmie.
          </p>

          <h3>4. Rodzaj zbieranych danych</h3>
          <p>
            Firma może zbierać następujące dane osobowe Użytkowników: imię i
            nazwisko, adres e-mail, numer telefonu, adres dostawy, dane
            dotyczące płatności.
          </p>
          <h3>5. Prawa osoby, której dane dotyczą</h3>
          <p>
            Każdy Użytkownik ma prawo dostępu do swoich danych, ich
            sprostowania, usunięcia lub ograniczenia przetwarzania, a także
            prawo do wniesienia sprzeciwu wobec przetwarzania, prawo do
            przenoszenia danych oraz prawo do cofnięcia zgody na przetwarzanie
            danych osobowych.
          </p>

          <h3>6. Okres przechowywania danych</h3>
          <p>
            Dane osobowe będą przechowywane przez okres niezbędny do realizacji
            celów, dla których zostały zebrane, z zastrzeżeniem wymogów prawnych
            dotyczących przechowywania danych dla celów rachunkowych i
            podatkowych.
          </p>

          <h3>7. Bezpieczeństwo danych</h3>
          <p>
            Firma stosuje środki techniczne i organizacyjne mające na celu
            ochronę przetwarzanych danych osobowych przed nieuprawnionym
            dostępem, utratą lub uszkodzeniem.
          </p>

          <h3>8. Zmiany w polityce prywatności</h3>
          <p>
            Polityka Prywatności może być aktualizowana. O wszelkich zmianach
            Użytkownicy zostaną poinformowani drogą elektroniczną.
          </p>
          <h3>9. Kontakt</h3>
          <p>
            W sprawach dotyczących przetwarzania danych osobowych prosimy o
            kontakt pod adresem e-mail:{" "}
            <a href="mailto:kswwop@gmail.com">kswwop@gmail.com</a> lub
            telefonicznie pod numerem +48 609-116-300.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;

////////////////////////// Metadata

const title = "Polityka prywatności | Pompa Ciepła 4 You | Ciepło z natury";
const description =
  "Dowiedz się, jak Pompa Ciepła 4 You chroni Twoje dane. Przeczytaj naszą Politykę Prywatności, aby poznać zasady przetwarzania i ochrony Twoich danych.";
const siteUrl = "https://pompaciepla4you.pl";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    applicationName: "Pompa Ciepła 4 You",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Polityka prywatności",
      "klimatyzatory",
      "ekologiczne ogrzewanie",
      "oszczędność energii",
      "redukcja CO2",
    ],
    authors: [{ name: "Pompa Ciepła 4 You", url: siteUrl }],
    creator: "Pompa Ciepła 4 You",
    publisher: "Pompa Ciepła 4 You",
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
      siteName: "Pompa Ciepła 4 You",
      images: [
        {
          url: `/images/openGraph.jpg`,
          width: 1200,
          height: 630,
          alt: "Pompa Ciepła 4 You - Ciepło z natury",
        },
      ],
      locale: "pl_PL",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@PompaCiepla4You",
      images: [
        {
          url: `/images/twitter.jpg`,
          width: 1200,
          height: 675,
          alt: "Pompa Ciepła 4 You - Ciepło z natury",
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
