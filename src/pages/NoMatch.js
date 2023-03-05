import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: '100%', height: '100vh' }}
      >
        <div className="d-flex flex-column align-items-center">
          <div className="fs-4">Oops! Page not found.</div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
