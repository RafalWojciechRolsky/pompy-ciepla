import path from 'path';
import { promises as fs } from 'fs';

import Hero from '@/components/Hero';
import Logos from '@/components/Logos';

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const OfertaPage = async () => {
  const jsonDir = path.join(process.cwd(), 'data', '');
  const resHero = await fs.readFile(path.join(jsonDir, 'hero.json'), 'utf8');
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero title={hero[5].title} points={hero[5].points} imageUrl={hero[5].imageUrl} />
      <Logos />
      <section className="offer">
        <div className="offer__container">
          <h2>Nasza Oferta</h2>
          <p>
            Witamy w serwisie (zapewne ponowanie) <strong>Pompy Ciepła 4 You</strong> - Twoim
            ekspertem w dziedzinie nowoczesnych i ekologicznych systemów ogrzewania i chłodzenia.
            Jest nam ogromnie miło, że możemy zaproponować kompleksowe rozwiązania, które nie tylko
            zwiększą komfort Twojego domu, ale również przyczynią się do ochrony środowiska i
            zmniejszenia Twoich rachunków za energię.
          </p>

          <h3>Wycena Twojej Inwestycji</h3>
          <p>
            Rozpocznij swoją przygodę z nowoczesnym ogrzewaniem od bezpłatnej konsultacji. Z
            przyjemnością przyjedziemy, aby ocenić Twoje potrzeby i przygotować szczegółowy
            kosztorys inwestycji w systemy pomp ciepła lub klimatyzatory. Z nami zawsze wiesz, na co
            idą Twoje pieniądze.
          </p>

          <h3>Instalacja Pomp Ciepła i Klimatyzatorów</h3>
          <p>
            Zaufaj doświadczeniu i profesjonalizmowi. Posiadamy wszystkie niezbędne certyfikaty,
            zajmiemy się montażem Twojej pompy ciepła lub klimatyzatora, zapewniając szybką i
            bezproblemową realizację projektu. Dzięki nam zyskasz nie tylko efektywne, ale i
            estetyczne rozwiązania dopasowane do Twojego domu.
          </p>

          <h3>Serwis i Konserwacja</h3>
          <p>
            Oferujemy pełen zakres usług serwisowych i konserwacyjnych, aby zapewnić długotrwałe i
            bezawaryjne działanie zainstalowanych systemów. Regularne przeglądy gwarantują nie tylko
            niezawodność, ale i maksymalną efektywność energetyczną Twojej instalacji.
          </p>

          <h3>Indywidualne Podejście</h3>
          <p>
            Każdy dom i każdy klient jest inny, dlatego do każdego projektu trzeba podejść
            indywidualnie, dopasowując rozwiązania do specyficznych potrzeb i oczekiwań. Niezależnie
            od tego, czy potrzebujesz systemu do nowego budynku, czy chcesz zmodernizować istniejącą
            instalację, jesteśmy tutaj, aby pomóc.
          </p>

          <h3>Gwarancja Satysfakcji</h3>
          <p>
            Za priorytet stawiamy zadowolenie naszych klientów, dlatego wszystkie nasze usługi i
            produkty są objęte gwarancją. Współpracujemy tylko z renomowanymi producentami, takimi
            jak Gree, Heiko, Haier, Rotenso, Panasonic czy Neoheat, aby zapewnić najwyższą jakość i
            niezawodność.
          </p>

          <h3>Zielona Energia w Zasięgu Ręki</h3>
          <p>
            Pompy ciepła to technologia przyszłości, która już dziś pozwala cieszyć się ekologicznym
            i ekonomicznym ogrzewaniem. Inwestując w pompę ciepła, nie tylko zredukujesz emisję
            dwutlenku węgla, ale również zmniejszysz swoje rachunki za energię, stając się bardziej
            niezależnym od zmiennych cen paliw kopalnych.
          </p>

          <p>
            Nie czekaj, zadbaj o swój dom i planetę już dziś. Skontaktuj się z nami, aby dowiedzieć
            się więcej o tym, jak możemy Ci pomóc. Czekamy na Twoje pytania i jesteśmy gotowi
            sprostać każdemu wyzwaniu. W stopce na każdej podstronie znajduje się fromularza
            kontaktowy. Bądźmy w kontakcie!
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
