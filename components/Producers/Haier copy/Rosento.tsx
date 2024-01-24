import Image from 'next/image';
import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Haier: FC<IPropsTypes> = (props) => {
  return (
    <section className="">
      <h2>Haier</h2>
    </section>
  );
};

export default Haier;
