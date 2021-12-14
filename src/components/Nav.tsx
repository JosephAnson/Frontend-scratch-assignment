import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ children, to }: { to: string; children: JSX.Element | string }) {
  const navClasses =
    'inline-block py-4 px-2 font-medium text-gray-500 hover:text-gray-900 no-underline';
  const activeColor = 'text-indigo-600 hover:text-indigo-800';
  return (
    <NavLink className={({ isActive }) => `${navClasses} ${isActive ? activeColor : ''}`} to={to}>
      {children}
    </NavLink>
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
