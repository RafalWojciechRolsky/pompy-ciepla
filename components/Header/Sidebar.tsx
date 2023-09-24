'use client';

import Link from 'next/link';
import { FC } from 'react';

import { push as Menu } from 'react-burger-menu';

interface IPropsTypes {
  name?: string;
}

const Sidebar: FC<IPropsTypes> = () => {
  return (
    <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
      <nav>
        <ul>
          <li className="menu-item">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="menu-item">
            <Link href={'/'}>Pompy Ciepła</Link>
          </li>
          <li className="menu-item">
            <Link href={'/'}>Klimatyzatory</Link>
          </li>
          <li className="menu-item">
            <Link href={'/'}>Producenci</Link>
          </li>
          <li className="menu-item">
            <Link href={'/'}>Realizacje</Link>
          </li>
          <li className="menu-item">
            <Link href={'/'}>Oferta</Link>
          </li>
          <li className="menu-item">
            <Link href={'/'}>O Nas</Link>
          </li>
          <li className="menu-item">
            <Link href={'/'}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};

export default Sidebar;
