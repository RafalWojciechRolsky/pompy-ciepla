import Image from 'next/image';
import { FC } from 'react';

interface IPropsTypes {
  title: string;
  body: string[];
  links: string[][];
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
          <div className="links">
            {props.links.length !== 0 &&
              props.links.map((link, i) => {
                return (
                  <a
                    href={link[1]}
                    key={link[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link[2]}
                  >
                    {`${link[0]}`}
                  </a>
                );
              })}
          </div>
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
