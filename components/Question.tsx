import Image from 'next/image';
import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Question: FC<IPropsTypes> = (props) => {
  return (
    <div className="question">
      <section className="question__container">
        <div>
          <h2>Czy zakup pompy ciepła to dobra decyzja?</h2>
          <p>
            Pomaga ona zmniejszyć roczną emisję dwutlenku węgla o 44%, a w całym okresie użytkowania
            kosztuje nie więcej niż kocioł gazowy. Urządzenia te są skuteczne, niezawodne i
            przyszłościowe - w przeciwieństwie do kotłów gazowych.
          </p>
        </div>
        <div className="question__imageContainer">
          <figure>
            <Image alt="Question Image" src="/images/Image-101.jpg" width={400} height={400} />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Question;
