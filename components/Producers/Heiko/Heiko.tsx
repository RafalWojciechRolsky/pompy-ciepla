/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Image from 'next/image';

interface IPropsTypes {
  name?: string;
}

const Heiko: FC<IPropsTypes> = (props) => {
  return (
    <section className="heiko">
      <div className="heiko__container">
        <h2>Heiko</h2>
        <p>
          W dzisiejszym szybko rozwijającym się świecie technologii HVAC, Heiko wyróżnia się jako
          marka, której produkty stawiają na innowacyjność, ekologię i design. Heiko, specjalizując
          się w systemach ogrzewania, wentylacji i klimatyzacji, oferuje rozwiązania idealnie
          odpowiadające na dynamiczne potrzeby rynku. Ich asortyment, w tym systemy Multi Split,
          pompy ciepła THERMAL PLUS CO+CWU oraz basenowe pompy ciepła POOL, zapewnia szeroki wybór
          dla różnorodnych aplikacji, od domowych po komercyjne.
        </p>
        <p>
          Jednym z aspektów, który wyróżnia Heiko, jest zastosowanie ekologicznego czynnika
          chłodniczego R32, co nie tylko świadczy o trosce firmy o środowisko, ale również
          gwarantuje wydajność i cichą pracę ich urządzeń. Produkty firmy Heiko, które łączą w sobie
          zaawansowane technologie z troską o naturę, i Heiko doskonale wpisuje się w te kryteria.
        </p>

        <div className="heiko__sub-section">
          <Image
            alt=""
            src="/images/Image-heiko.jpg"
            width={513}
            height={407}
            className="heiko__img"
            sizes="(min-width: 513px)"
          />
          <div className="text">
            <p>
              Z punktu widzenia instalatora, produkty Heiko wyróżniają się łatwością montażu, co
              jest kluczowe w zapewnieniu szybkiego i efektywnego serwisu. Dodatkowo, możliwość
              inteligentnego sterowania Wi-Fi to funkcja, którą klienci szczególnie cenią, gdyż
              zapewnia im wygodę i kontrolę nad ich systemami HVAC z każdego miejsca i o każdej
              porze.
            </p>
            <p>
              Design urządzeń Heiko również zasługuje na uwagę. Minimalistyczny i nowoczesny wygląd
              sprawia, że produkty te doskonale komponują się z wnętrzem, niezależnie od jego stylu.
              To ważny aspekt dla wielu klientów, którzy szukają nie tylko funkcjonalności, ale i
              estetyki w swoich rozwiązaniach klimatyzacyjnych.
            </p>
          </div>
        </div>
        <h4>Przydatne linki</h4>
        <ul>
          <li>
            <a href="https://heiko.pl/">Link do oficjalnej strony producenta</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Heiko;
