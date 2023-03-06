import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

function NavBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const activeNav = {
    textDecoration: 'underline',
  };

  const handleMenuToggle = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <div
        className={`menu-toggle ${show ? 'is-active' : ''}`}
        onClick={handleMenuToggle}
        role="presentation"
      >
        <div className="hamburger">
          <span />
        </div>
      </div>
      <aside className={`sidebar ${show ? 'is-active' : ''}`}>
        <div className="dropdown d-flex justify-content-center align-items-center border-bottom">
          <button
            className="btn btn-secondary dropdown-toggle border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: '#589d1a' }}
          >
            <UserOutlined
              className="border rounded-circle p-1"
              style={{ fontSize: '32px' }}
            />
            <br />
            <small className="text-light">
              Welcome
              Sam
            </small>
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item" onClick={handleLogout} role="presentation" style={{ cursor: 'pointer' }}>
                Logout
              </span>
            </li>
          </ul>
        </div>

        <nav className="menu mt-4">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            Doctors
          </NavLink>

          <NavLink
            to="/my-reservations"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            My Reservations
          </NavLink>

          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            Add Reservation
          </NavLink>

          <NavLink
            to="/add/doctor"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            Add Doctor
          </NavLink>

          <NavLink
            to="/add-doctor"
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            className="menu-item"
          >
            Delete Doctor
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default NavBar;
