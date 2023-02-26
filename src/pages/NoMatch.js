import React from 'react';
import NavBar from '../components/NavBar';

function NoMatch() {
  return (
    <div className="page">
      <NavBar />
      <main className="content">
        <div className="text-center fs">
          404 NOT FOUND!
        </div>
      </main>
    </div>
  );
}

export default NoMatch;
