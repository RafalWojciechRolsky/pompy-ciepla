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
            <Link href={'/pompy-ciepla'}>Pompy Ciepła</Link>
          </li>
          <li className="menu-item">
            <Link href={'/klimatyzatory'}>Klimatyzatory</Link>
          </li>
          <li className="menu-item">
            <Link href={'/producenci'}>Producenci</Link>
          </li>
          <li className="menu-item">
            <Link href={'/realizacje'}>Realizacje</Link>
          </li>
          <li className="menu-item">
            <Link href={'/oferta'}>Oferta</Link>
          </li>
          <li className="menu-item">
            <Link href={'/about'}>O Nas</Link>
          </li>
          <li className="menu-item">
            <Link href={'/#form-contact'}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};

export default Sidebar;
