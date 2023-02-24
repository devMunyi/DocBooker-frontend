import React from 'react';
import { Link } from 'react-router-dom';

function SingleDoctor() {
  return (
    <div className="container d-flex justify-content-center" style={{ width: '100vh' }}>
      {/* <Link to={user.id}>{user.name}</Link> */}
      <Link to="/reserve/1" className="btn btn-success btn-sm">Reserve</Link>
      {/* <button className='btn btn-success btn-sm'>Reserve</button> */}
    </div>
  );
}

export default SingleDoctor;
