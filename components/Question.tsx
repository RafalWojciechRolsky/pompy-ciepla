import Image from 'next/image';
import { FC } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface IPropsTypes {
  title: string;
  body: string[];
  links: boolean;
  textOnLeft: boolean;
  backgroundColor: string;
  imageUrl: string;
}

const Question: FC<IPropsTypes> = (props) => {
  return (
    <div className="question" style={{ backgroundColor: props.backgroundColor }}>
      <section className={`question__container ${props.textOnLeft ? 'row' : 'row-reverse'}`}>
        <div>
          <h2>{props.title}</h2>
          {props.body.length === 1 ? (
            <p>{props.body[0]}</p>
          ) : (
            <ul>
              {props.body.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          )}
          {props.links === true && (
            <div className="links">
              <a href={'/'} target="_blank" rel="noopener noreferrer" className="btn">
                Napisz do nas
              </a>
              <a href={'/'} target="_blank" rel="noopener noreferrer" className="btn btn--offer">
                Oferta <FaLongArrowAltRight size={15} />
              </a>
            </div>
          )}
        </div>
        <div className="question__imageContainer">
          <figure>
            <Image
              alt="Question Image"
              src={`/images/${props.imageUrl}`}
              width={400}
              height={400}
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Question;
