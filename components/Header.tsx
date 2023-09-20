'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Sidebar from './Sidebar';

interface IPropsTypes {
  name?: string;
}

const Header: FC<IPropsTypes> = (props) => {
  return (
    <header className="header" id="page-wrap">
      <div>
        <section>
          <Link href={'/'}>
            <Image src="/images/logo.svg" alt="logo" width="138" height="45" />
          </Link>
          <a href="tel:+48123456789">+48 123-123-123</a>
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
            <li>
              <Link href={'/'} className="btn">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} right isOpen={true} />
      </div>
    </header>
  );
};

export default Header;
