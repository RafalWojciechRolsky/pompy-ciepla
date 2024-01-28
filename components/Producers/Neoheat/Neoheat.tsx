/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Image from 'next/image';

import MovieNeoheat from './MovieNeoheat';

interface IPropsTypes {
  name?: string;
}

const Neoheat: FC<IPropsTypes> = (props) => {
  return (
    <section className="neoheat">
      <div className="neoheat__container">
        <h2>NeoHeat</h2>
        <p>
          Firma Neoheat specjalizuje się w produkcji i dystrybucji pomp ciepła typu powietrze-woda,
          które są wykorzystywane do ogrzewania domów, podgrzewania wody użytkowej oraz chłodzenia
          pomieszczeń. Pompy ciepła Neoheat charakteryzują się wysoką efektywnością energetyczną,
          ekologicznym czynnikiem chłodniczym (np. R290 lub R32) oraz możliwością współpracy z
          instalacjami fotowoltaicznymi.
        </p>
        <p>
          W ofercie firmy znajdują się różne modele pomp ciepła, w tym urządzenia typu split i
          monoblok, które różnią się wydajnością i są dostosowane do różnych potrzeb użytkowników –
          od domów jednorodzinnych po duże obiekty komercyjne. Firma oferuje również specjalistyczne
          pompy ciepła do basenów, które mogą podgrzewać wodę chlorowaną i słoną.
        </p>
        <p>
          Pompy ciepła Neoheat są cenione za cichą pracę, energooszczędność i możliwość zdalnego
          sterowania. Urządzenia te są dostosowane do pracy w różnych warunkach klimatycznych, nawet
          przy niskich temperaturach zewnętrznych.
        </p>
        <div className="neoheat__sub-section">
          <div className="text">
            <p>
              Firma Neoheat jest częścią polskiej firmy Iglotech, która została założona w 1993 roku
              i ma swoją siedzibę w Kwidzynie. Neoheat oferuje również możliwość skorzystania z
              dofinansowania na zakup i montaż pomp ciepła w ramach programów wspierających
              ekologiczne źródła energii. Produkty firmy są dostępne w różnych punktach sprzedaży
              oraz można je nabyć za pośrednictwem dystrybutorów i sklepów internetowych.
            </p>
          </div>
          <Image
            alt=""
            src="/images/Image-neoheat.jpg"
            width={450}
            height={335}
            className="neoheat__img"
            sizes="(min-width: 450px)"
          />
        </div>
        <MovieNeoheat />
        <h4>Przydatne linki</h4>
        <ul>
          <li>
            <a href="https://neoheat.pl/">Link do oficjalnej strony producenta</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@grupaiglotech">Link do kanału NeoHeat na youtube</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Neoheat;
