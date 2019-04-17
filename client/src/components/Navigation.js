import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1>Educell</h1>
      <div>
        <NavLink to='/'>
          <h2>Home</h2>
        </NavLink>
        <NavLink to='/students'>
          <h2>All Students</h2>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation;