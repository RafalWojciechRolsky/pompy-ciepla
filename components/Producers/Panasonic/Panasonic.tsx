/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Image from 'next/image';

import MoviePanasonic from './MoviePanasonic';

interface IPropsTypes {
  name?: string;
}

const Panasonic: FC<IPropsTypes> = (props) => {
  return (
    <section className="panasonic" id="panasonic">
      <div className="panasonic__container">
        <h2>Panasonic</h2>
        <p>
          Firma Panasonic, która ma swoją ponad 100 letnią historię. Została założona w 1918 r.
          przez jej założyciela, Konosuke Matsushitę, i poprzez swoją działalność biznesową angażuje
          się w postęp i rozwój społeczeństwa oraz dobrobyt ludzi, podnosząc tym samym jakość życia
          na całym świecie. Nie da się w kilka krótkich słowach opisać zakres działania firmy
          Panasonic. Jest to korporacja o światowym zasięgu i działająca w na wielu polach.
        </p>
        <p>
          Pierwszą chłodziarkę domową firma Panasonic wyprodukowała w 1958 roku, i od tego czasu
          kontynuuje dążenie do zapewnienia najwyższego komfortu klientom w każdym miejscu i czasie.
        </p>
        <p>
          Podstawowy cel został sformułowany w 1929 roku przez założyciela firmy, Konosuke
          Matsushita i brzmi nastepująco - "Uznając nasze obowiązki jako przemysłowców, poświęcimy
          się postępowi i rozwojowi społeczeństwa oraz dobrobytowi ludzi poprzez naszą działalność
          biznesową, podnosząc tym samym jakość życia na całym świecie."
        </p>

        <div className="panasonic__sub-section">
          <div className="text">
            <ul>
              <li>1958 Wprowadzenie pierwszego klimatyzatora pokojowego do użytku domowego.</li>
              <li>1971 Rozpoczęcie produkcji chillerów absorpcyjnych.</li>
              <li>
                1973 Panasonic wprowadza na rynek pierwszą wysoko wydajną pompę ciepła typu
                powietrze-woda w Japonii.
              </li>
              <li>
                1975 Panasonic staje się pierwszym japońskim producentem klimatyzatorów w Europie.
              </li>
              <li>
                1985 Wprowadzenie pierwszego klimatyzatora VRF typu GHP (gazowa pompa ciepła).
              </li>
              <li>
                1989 Wprowadzenie pierwszego na świecie jednoczesnego 3-rurowego systemu
                ogrzewania/chłodzenia VRF.
              </li>
              <li>2008 Pierwszy na świecie klimatyzator wyposażony w nanoe™.</li>
              <li>
                2008 Nowa koncepcja Etherea: wysoka sprawność i wysoka wydajność w połączeniu z
                doskonałym wzornictwem.
              </li>
              <li>
                2010 Nowy Aquarea. Panasonic wprowadza na rynek europejski Aquarea, nowy,
                innowacyjny system o niskim zużyciu energii.
              </li>
              <li>
                2012 Nowe jednostki Panasonic GHP. Napędzane gazem Systemy VRF są idealne dla
                projektów, w których obowiązują ograniczenia mocy.
              </li>
              <li>
                2015 Jednostki kondensacyjne CO2 w Europie. Idealne rozwiązanie dla supermarketów,
                sklepów i stacji benzynowych.
              </li>
              <li>2016 Nowe Systemy VRF ECOi EX o niezwykłej wydajności energetycznej.</li>
              <li>2018 Pierwszy w Europie system hybrydowy z VRF i GHP.</li>
              <li>
                Teraz Panasonic wprowadza nową serię Heat Pump Chiller, która nosi nazwę ECOi-W.
              </li>
            </ul>
          </div>
          <figure>
            <Image
              alt=""
              src="/images/Image-panasonic-1.jpg"
              width={400}
              height={308}
              className="gree__img"
              sizes="(min-width: 452px)"
            />
            <Image
              alt=""
              src="/images/Image-panasonic-2.jpg"
              width={400}
              height={308}
              className="gree__img"
              sizes="(min-width: 452px)"
            />
            <Image
              alt=""
              src="/images/Image-panasonic-3.jpg"
              width={400}
              height={308}
              className="gree__img"
              sizes="(min-width: 452px)"
            />
          </figure>
        </div>
        <MoviePanasonic />
        <h4>Przydatne linki</h4>
        <ul>
          <li>
            <a href="https://www.aircon.panasonic.eu/GB_en/heating-and-cooling/">
              Link do oficjalnej strony producenta
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@PanasonicAirCon">
              Link do kanału Panasonic na youtube
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Panasonic;
