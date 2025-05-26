import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

interface SidebarProps {
  pageWrapId: string
  outerContainerId: string
}

const Sidebar = (props: SidebarProps): React.JSX.Element => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/work">
        Work
      </Link>
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