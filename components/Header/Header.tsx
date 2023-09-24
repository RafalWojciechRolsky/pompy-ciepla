'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Header: FC<IPropsTypes> = (props) => {
  return (
    <header className="header">
      <div>
        <section>
          <Link href={'/'}>
            <Image src="/images/logo.svg" alt="logo" width="138" height="45" />
          </Link>
          <a href="tel:+48123456789" className="phone">
            +48 123-123-123
          </a>
        </section>
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
