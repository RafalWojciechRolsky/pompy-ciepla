import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Footer: FC<IPropsTypes> = (props) => {
  return (
    <div className="">
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
