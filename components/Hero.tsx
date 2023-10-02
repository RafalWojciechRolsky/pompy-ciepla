import { getBase64 } from '@/lib/getBase64';
import Image from 'next/image';
import { FC } from 'react';

interface IPropsTypes {
  title: string;
  points: string[];
  imageUrl: string;
}

const Hero: FC<IPropsTypes> = async ({ title, points, imageUrl }) => {
  const blurredDataUrl = await getBase64(imageUrl);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="text">
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <ul>
              {points.map((point, index) => {
                return (
                  <li key={point}>
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="/" className="btn btn--hero">
            Napisz do nas
          </a>
        </div>
        <div className="hero__imageContainer">
          <figure>
            <Image
              alt="Hero Image"
              src={`/images/${imageUrl}`}
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={blurredDataUrl}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
