import { Metadata } from "next";

const ConditionsPage = async () => {
  return (
    <>
      <section className="condtions">
        <div className="condtions__container">
          <h1>
            Regulamin korzystania ze strony internetowej Pompy Ciepła 4 You
          </h1>

          <h3>1. Postanowienia ogólne</h3>
          <p>
            Regulamin określa zasady korzystania ze strony internetowej{" "}
            <strong>Pompy Ciepła 4 You</strong>, dostępnej pod adresem{" "}
            <i>
              <a href="https://pompaciepla4you.pl/">https://pompaciepla4you.pl/</a>
            </i>
            . Właścicielem strony oraz administratorem serwisu <strong>Pompy Ciepła 4 You</strong> jest{"  "} <strong>KSW Anfdrzej Wolak</strong> z siedzibą przy ul. Nawoja 20,
            Nawojowa Góra, 32-065, Polska. Korzystanie ze strony oznacza
            akceptację postanowień niniejszego Regulaminu.
          </p>

          <h3>2. Warunki świadczenia usług drogą elektroniczną</h3>
          <p>
            <strong>Pompy Ciepła 4 You</strong> świadczy usługi drogą
            elektroniczną, w tym umożliwia dostęp do informacji o oferowanych
            produktach i usługach. Usługi są świadczone 24 godziny na dobę, 7
            dni w tygodniu.
          </p>

          <h3>3. Prawa i obowiązki użytkowników</h3>
          <p>
            Użytkownik zobowiązany jest do korzystania ze strony w sposób zgodny
            z prawem, dobrymi obyczajami oraz postanowieniami Regulaminu.
            Użytkownik zobowiązany jest do niepodejmowania działań mogących
            wpływać na prawidłowe funkcjonowanie strony.
          </p>

          <h3>4. Reklamacje</h3>
          <p>
            Użytkownicy, którzy napotkają problemy techniczne, błędy w
            treściach, mają zastrzeżenia do jakości dostarczanych informacji lub
            uznają, że serwis narusza ich prawa, mogą zgłosić reklamację za
            pomocą następujących kanałów: E-mail: kswwop@gmail.com Telefon:
            609-116-300. Reklamacje będą rozpatrywane w terminie do 14 dni
            roboczych od daty otrzymania.
          </p>

          <h3>5. Ochrona danych osobowych</h3>
          <p>
            Administratorem danych osobowych przetwarzanych w związku z
            korzystaniem ze strony jest <strong>Pompy Ciepła 4 You</strong>.
            Szczegółowe informacje dotyczące przetwarzania danych osobowych
            zawarte są w Polityce Prywatności.
          </p>

          <h3>6. Prawa autorskie</h3>
          <p>
            Wszystkie treści zamieszczone na stronie są chronione prawem
            autorskim i należą do Pompy Ciepła 4 You lub są wykorzystywane na
            podstawie odpowiednich licencji i umów.
          </p>

          <h3>7. Postanowienia końcowe</h3>
          <p>
            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają
            odpowiednie przepisy prawa polskiego. Ewentualne spory wynikające z
            korzystania ze strony będą rozstrzygane przez właściwe polskie sądy.
          </p>
        </div>
      </section>
    </>
  );
};

export default ConditionsPage;

////////////////////////// Metadata

const title = "Regulamin strony | Pompy Ciepła 4 You | Ciepło z natury";
const description =
  "Przeczytaj regulamin strony Pompy Ciepła 4 You, aby dowiedzieć się więcej o zasadach dostępu do naszych usług i informacji o ekologicznym ogrzewaniu";
const siteUrl = "https://pompyciepla4you.pl";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    applicationName: "Pompy Ciepła 4 You",
    referrer: "origin-when-cross-origin",
    keywords: [
      "regulamin pomp ciepla 4 You",
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
