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
          <a href="/#form-contact" className="btn btn--hero">
            Napisz do nas
          </a>
        </div>
        <div className="hero__imageContainer">
          <figure>
            <Image
              alt={`Obrazek -  ${title}`}
              src={`/images/${imageUrl}`}
              fill={true}
              placeholder="blur"
              blurDataURL={blurredDataUrl}
              sizes="(min-width: 1460px) 435px, (min-width: 1220px) calc(54.55vw - 269px), (min-width: 980px) calc(54.55vw - 224px), (min-width: 640px) 56.25vw, 71.88vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
