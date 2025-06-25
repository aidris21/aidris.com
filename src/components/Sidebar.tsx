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
      <Link className="menu-item" to="/contact">
        Contact
      </Link>
    </Menu>
  );
};

export default Sidebar