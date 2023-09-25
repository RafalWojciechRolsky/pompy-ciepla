'use client';

import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import Logo from '../Logo';

interface IPropsTypes {
  name?: string;
}

const Header: FC<IPropsTypes> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
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
          <Link href={'/'} className="btn btn__contact">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
