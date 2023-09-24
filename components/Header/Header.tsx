'use client';

import Link from 'next/link';
import { FC } from 'react';
import Logo from '../Logo';

interface IPropsTypes {
  name?: string;
}

const Header: FC<IPropsTypes> = (props) => {
  return (
    <header className="header">
      <div>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/'}>Pompy Ciepła</Link>
            </li>
            <li>
              <Link href={'/'}>Klimatyzatory</Link>
            </li>
            <li>
              <Link href={'/'}>Producenci</Link>
            </li>
            <li>
              <Link href={'/'}>Realizacje</Link>
            </li>
            <li>
              <Link href={'/'}>Oferta</Link>
            </li>
            <li>
              <Link href={'/'}>O Nas</Link>
            </li>
          </ul>
          <Link href={'/'} className="btn btn--contact">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
