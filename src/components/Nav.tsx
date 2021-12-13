import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem'
      }}
    >
      <Link to="/challenge-1">Challenge 1</Link>
      <Link to="/challenge-2">Challenge 2</Link>
      <Link to="/challenge-3">Challenge 3</Link>
    </nav>
  );
}

export default Nav;
