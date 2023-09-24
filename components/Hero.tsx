import Image from 'next/image';
import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Hero: FC<IPropsTypes> = () => {
  return (
    <section className="hero">
      <div className="hero--container">
        <div className="hero--left">
          <div className="text">
            <h1>
              <span>Pompy Ciepła</span>
              to ogrzewanie energią ze środowiska
            </h1>
            <ul>
              <li>
                <span>Zużywają do 3/4 ciepła otoczenia</span>
              </li>
              <li>
                <span>Mniejsza zależność od zmieniających się cen ropy lub gazu</span>
              </li>
              <li>
                <span>Łatwa rozbudowa do systemu hybrydowego</span>
              </li>
            </ul>
          </div>
          <a href="/" className="btn">
            Napisz do nas
          </a>
        </div>
        <div className="hero--imageContainer">
          <figure>
            <Image alt="hero Image" src="/images/Image-01.png" width={500} height={500} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
