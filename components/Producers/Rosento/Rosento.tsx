/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Image from 'next/image';

import MovieRosento from './MovieRosento';

interface IPropsTypes {
  name?: string;
}

const Rosento: FC<IPropsTypes> = (props) => {
  return (
    <section className="">
      <h2>Rosento</h2>
      <p>
        Rotenso konsekwentnie umacnia silną pozycję dostawcy nowoczesnych, niezawodnych i
        przyjaznych środowisku systemów klimatyzacyjnych. Misją firmy jest dostarczanie najnowszych
        rozwiązań w branży klimatyzacji, wentylacji i ogrzewania, opartych na wysokowydajnej,
        energooszczędnej technologii inwerterowej.
      </p>
      <p>
        Dzięki wieloletnim inwestycjom w rozwój technologii, urządzenia Rotenso należą do
        najbardziej innowacyjnych rozwiązań umożliwiających regulację i kontrolę temperatury w
        budynkach. Co roku wprowadzane są na rynek nowe urządzenia klimatyzacyjne o coraz wyższych
        parametrach technologicznych i nowoczesnym wzornictwie. Systemy RVF Sygnowane logo Rotenso
        można spotkać w wielu prestiżowych obiektach komercyjnych.
      </p>
      <p>
        W fabrykach Rotenso zlokalizowanych w sercu Azji powstają unikalne i innowacyjne rozwiązania
        technologiczne. W nich pomysły przekształcają się w rozwiązania - kompletne urządzenia
        najwyższej jakości.
      </p>
      <p>
        Na ofertę marki składają się urządzenia przeznaczone do zastosowań domowych, biurowych i
        przemysłowych. Inwestycje w badania i rozwój produktów umożliwiają wprowadzenie na rynek
        innowacyjnych produktów oraz energooszczędnych klimatyzatorów do każdego rodzaju budynku.
      </p>
      <div className="rosento__sub-section">
        <Image
          alt=""
          src="/images/Image-rosento.jpg"
          width={700}
          height={812}
          className="rosento__img"
          sizes="(min-width: 700px)"
        />
        <div className="text">
          <h3>Zakres urządzeń i zastosowań</h3>
          <h4>Sektor konsumencki</h4>
          <ul>
            <li>Klimatyzatory pokojowe</li>
            <li>Klimatyzatory przenośne</li>
            <li>Oczyszczacze powietrza</li>
            <li>Osuszacze powietrza</li>
          </ul>
          <h4>Urządzenia komercyjne i multi split</h4>
          <ul>
            <li>Splity: kasetowy, podłogowo - sufitowe, kanałowe, konsolowe</li>
            <li>Uniwersalne jednostki zewnętrzne</li>
            <li>Multi agregaty</li>
            <li>Multi agregaty: ścienne, kasetowe, kanałowe, konsolowe</li>
          </ul>
        </div>
      </div>
      <MovieRosento />
      <h4>Przydatne linki</h4>
      <ul>
        <li>
          <a href="https://rotenso.com/pl/">Link do oficjalnej strony producenta</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@Rotenso_PL">Link do kanału Rosento na youtube</a>
        </li>
      </ul>
    </section>
  );
};

export default Rosento;
