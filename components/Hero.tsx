import Image from 'next/image';
import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Hero: FC<IPropsTypes> = () => {
  return (
    <section className="hero">
      <div className="heroContainer">
        <div className="heroLeft">
          <div className="heroText">
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
        <figure className="imageContainer">
          <div className="aspectRatioKeeper">
            <Image
              className="heroImage"
              alt=""
              src="/images/Image-01.png"
              width={500}
              height={500}
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
