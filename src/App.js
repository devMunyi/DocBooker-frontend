import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify'; // will be common for all pages that will need to toast a notification
import 'react-toastify/dist/ReactToastify.css'; // will be common for all pages that will need to toast a notification
import './App.css';
// import dummyData from './Components/dummyData';
// import LoginSignUp from './Components/LoginSignUp';
// import DoctorDetails from './Components/DoctorDetails';
// import AddDoctor from './Components/AddDoctor';

import Doctors from './pages/Doctors';
import SingleDoctor from './pages/SingleDoctor';
import NoMatch from './pages/NoMatch';
import Reserve from './pages/Reserve';

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" theme="colored" />
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path="/doctors/:doctorId" element={<SingleDoctor />} />
        <Route path="/reserve/:doctorId" element={<Reserve />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
