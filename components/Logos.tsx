import React, { FC } from 'react';
import GreeLogo from '../public/images/Gree_logo.svg';
import Haier from '../public/images/Haier_logo.svg';
import Panasonic from '../public/images/Panasonic_logo.svg';
import Rotenso from '../public/images/Rotenso_logo.svg';
import Image from 'next/image';
import Link from 'next/link';

interface IPropsTypes {
  name?: string;
}

const Logos: FC<IPropsTypes> = () => {
  return (
    <div className="logos">
      <div className="logos__one">
        <Link href={'/'}>
          <Image src={GreeLogo} alt="Gree" height={50} />
        </Link>
        <Link href={'/'}>
          <Image src={Panasonic} alt="Panasonic" height={50} />
        </Link>
      </div>
      <div className="logos__two">
        <Link href={'/'}>
          <Image src={Haier} alt="Haier" height={50} />
        </Link>
        <Link href={'/'}>
          <Image src={Rotenso} alt="Rotenso" height={50} />
        </Link>
      </div>
    </div>
  );
};

export default Logos;
