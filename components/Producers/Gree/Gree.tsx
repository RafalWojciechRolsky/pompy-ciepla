/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Image from 'next/image';

import MovieGree from './MovieGree';

interface IPropsTypes {
  name?: string;
}

const Gree: FC<IPropsTypes> = (props) => {
  return (
    <section className="gree">
      <h2>Gree</h2>
      <p>
        Historia Gree to historia firmy od małej manufaktury do największej na świecie firmy
        klimatyzacyjnej. Gree urosła do międzynarodowego przedsiębiorstwa AGD po ponad 20 latach
        rozwoju.
      </p>
      <p>
        Założona w 1991 roku, Gree Electric Appliances, Inc. of Zhuhai została notowana na giełdzie
        w Shenzhen w listopadzie 1996 roku. Na początku swojego powstania firma polegała głównie na
        montażu i produkcji klimatyzatorów domowych. GREE była małą manufakturą z liniami
        produkcyjnymi klimatyzatorów okiennych. Dzięki serii produktów rynkowych, GREE zdobyło
        możliwości rynkowe i zaczęło budować wizerunek marki, co stworzyło dobre podstawy do
        przyszłego rozwoju.
      </p>
      <p>
        Posiada 30 "wiodących na arenie międzynarodowej" technologii, 2 państwowe nagrody za postęp
        naukowo-techniczny, 2 państwowe nagrody za wynalazki technologiczne i 4 nagrody za chińskie
        patenty.
      </p>
      <div className="gree__sub-section">
        <div className="text">
          <p>
            Produkty Haier są zbudowane z najwyższej jakości materiałów przez wysoko
            wykwalifikowanych inżynierów, zawierają najnowsze innowacje technologiczne, które
            zostały zaprojektowane tak, aby były łatwe w użyciu, wydajne i w efekcie oszczędzały
            czas.
          </p>
          <p>
            Poza tym firma posiada centra badawczo-rozwojowe na wszystkich pięciu kontynentach
            świata, których jedyną misją jest tworzenie rozwiązań, dzięki którym klienci odzyskają
            swój cenny czas.
          </p>
        </div>
        <Image
          alt=""
          src="/images/Image-gree.jpg"
          width={452}
          height={379}
          className="gree__img"
          sizes="(min-width: 452px)"
        />
      </div>
      <MovieGree />
      <h4>Przydatne linki</h4>
      <ul>
        <li>
          <a href="https://gree.pl/">Link do oficjalnej strony producenta</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@GREEComfort">Link do kanału Gree na youtube</a>
        </li>
      </ul>
    </section>
  );
};

export default Gree;
