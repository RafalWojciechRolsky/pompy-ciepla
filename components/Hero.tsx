import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Hero: FC<IPropsTypes> = (props) => {
  return (
    <div className="">
      <h1>Hero</h1>
    </div>
  );
};

export default Hero;
