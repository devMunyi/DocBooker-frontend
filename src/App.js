import React from 'react';
import './App.css';
import dummyData from './Components/dummyData';
// import LoginSignUp from './Components/LoginSignUp';
import DoctorDetails from './Components/DoctorDetails';

function App() {
  return (
    // <div className="App" />
    // <LoginSignUp />
    <DoctorDetails doctor={dummyData[0]} />
  );
}

export default App;
