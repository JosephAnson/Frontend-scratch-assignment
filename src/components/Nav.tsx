import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ children, to }: { to: string; children: JSX.Element | string }) {
  return (
    <Link
      className="inline-block py-4 px-2 font-medium text-gray-500 hover:text-gray-900 no-underline"
      to={to}
    >
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <nav className="container mx-auto" aria-label="Global">
      <div className="-mx-2">
        <NavItem to="/challenge-1">Challenge 1</NavItem>
        <NavItem to="/challenge-2">Challenge 2</NavItem>
        <NavItem to="/challenge-3">Challenge 3</NavItem>
      </div>
    </nav>
  );
}

export default Nav;
