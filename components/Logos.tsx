import React, { FC } from 'react';
import GreeLogo from '../public/images/Gree_logo.svg';
import Haier from '../public/images/Haier_logo.svg';
import Panasonic from '../public/images/Panasonic_logo.svg';
import Rotenso from '../public/images/Rotenso_logo.svg';
import Heiko from '../public/images/Heiko_logo.svg';
import Neoheat from '../public/images/Neoheat_logo.svg';
import Image from 'next/image';

interface IPropsTypes {
  name?: string;
}

const Logos: FC<IPropsTypes> = () => {
  return (
    <div className="logos">
      <div className="logos__section">
        <a href={'/producenci/#gree'}>
          <Image src={GreeLogo} alt="Gree" height={45} />
        </a>
        <a href={'/producenci/#heiko'}>
          <Image src={Heiko} alt="Heiko" height={45} />
        </a>
      </div>
      <div className="logos__section">
        <a href={'/producenci/#haier'}>
          <Image src={Haier} alt="Haier" height={45} />
        </a>
        <a href={'/producenci/#rosento'}>
          <Image src={Rotenso} alt="Rotenso" height={45} />
        </a>
      </div>
      <div className="logos__section">
        <a href={'/producenci/#panasonic'}>
          <Image src={Panasonic} alt="Panasonic" height={45} />
        </a>
        <a href={'/producenci/#neoheat'}>
          <Image src={Neoheat} alt="Neoheat" height={45} />
        </a>
      </div>
    </div>
  );
};

export default Logos;
