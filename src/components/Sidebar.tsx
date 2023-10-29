import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

interface SidebarProps {
  pageWrapId: string
  outerContainerId: string
}

const Sidebar = (props: SidebarProps): React.JSX.Element => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/work">
        Work
      </a>
      <a className="menu-item" href="/music">
        Music
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar