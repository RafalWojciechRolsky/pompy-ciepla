'use client';

import { FC } from 'react';

import { slide as Menu } from 'react-burger-menu';

interface IPropsTypes {
  name?: string;
}

const Sidebar: FC<IPropsTypes> = () => {
  return (
    <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;
