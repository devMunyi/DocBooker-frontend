import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);

  const activeNav = {
    textDecoration: 'underline',
  };

  const handleMenuToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={`menu-toggle ${show ? 'is-active' : ''}`} onClick={handleMenuToggle} role="presentation">
        <div className="hamburger">
          <span />
        </div>
      </div>
      <aside className={`sidebar ${show ? 'is-active' : ''}`}>
        <h3>MENU</h3>
        <nav className="menu">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            Doctors
          </NavLink>

          <NavLink
            to="/add-doctor"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            Add Doctor
          </NavLink>

          <NavLink
            to="/my-reservations"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            My Reservations
          </NavLink>

          <NavLink
            to="/add-reservation"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            Add Reservation
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default NavBar;
