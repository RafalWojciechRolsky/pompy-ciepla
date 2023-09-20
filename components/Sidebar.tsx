import Link from 'next/link';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const Sidebar = (props: any) => {
  return (
    <Menu {...props}>
      <nav>
        <ul id="sidebar">
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
            <Link href={'/'}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};

export default Sidebar;
