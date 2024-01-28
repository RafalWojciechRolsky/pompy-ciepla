import React, { FC } from 'react';
import GreeLogo from '../public/images/Gree_logo.svg';
import Haier from '../public/images/Haier_logo.svg';
import Panasonic from '../public/images/Panasonic_logo.svg';
import Rotenso from '../public/images/Rotenso_logo.svg';
import Heiko from '../public/images/Heiko_logo.svg';
import Neoheat from '../public/images/Neoheat_logo.svg';
import Image from 'next/image';
import Link from 'next/link';

interface IPropsTypes {
  name?: string;
}

const Logos: FC<IPropsTypes> = () => {
  return (
    <div className="logos">
      <div className="logos__section">
        <Link href={'/producenci/#gree'}>
          <Image src={GreeLogo} alt="Gree" height={45} />
        </Link>
        <Link href={'/producenci/#heiko'}>
          <Image src={Heiko} alt="Heiko" height={45} />
        </Link>
      </div>
      <div className="logos__section">
        <Link href={'/producenci/#haier'}>
          <Image src={Haier} alt="Haier" height={45} />
        </Link>
        <Link href={'/producenci/#rosento'}>
          <Image src={Rotenso} alt="Rotenso" height={45} />
        </Link>
      </div>
      <div className="logos__section">
        <Link href={'/producenci/#panasonic'}>
          <Image src={Panasonic} alt="Panasonic" height={45} />
        </Link>
        <Link href={'/producenci/#neoheat'}>
          <Image src={Neoheat} alt="Neoheat" height={45} />
        </Link>
      </div>
    </div>
  );
};

export default Logos;
