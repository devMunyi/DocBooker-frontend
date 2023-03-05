import React from 'react';
import { Link } from 'react-router-dom';
import { RollbackOutlined } from '@ant-design/icons';

function NoMatch() {
  return (
    <div className="">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: '100%', height: '100vh' }}
      >
        <div className="d-flex flex-column align-items-center">
          <div className="fs-4">Oops! Page not found.</div>
          <Link to="/"><RollbackOutlined style={{ fontSize: '25px', color: '#589d1a' }} title="Go Back" /></Link>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
