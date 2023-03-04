import {
  BrowserRouter as Router, Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Doctors from './pages/Doctors';
import SingleDoctor from './pages/SingleDoctor';
import NoMatch from './pages/NoMatch';
import Reserve from './pages/Reserve';
import ReservationList from './pages/ReservationList';
<<<<<<< HEAD
import AddDoctor from './pages/AddDoctor';
=======
import SingleReservation from './pages/SingleReservation';
// import UpdateReservation from './pages/UpdateReservation';
import LoginSignUp from './pages/LoginSignUp';
>>>>>>> c7063a22619638e5e9868f420ec10bae4d9d8236

function ProtectedRoute() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
function App() {
  return (
    <Router>
      <ToastContainer position="top-center" theme="colored" />
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Doctors />} />
          <Route path="/doctors/:doctorId" element={<SingleDoctor />} />
          <Route path="/reserve/:doctorId" element={<Reserve />} />
<<<<<<< HEAD
          <Route path="/reserve/:userId/doctor/:doctorId" element={<ReservationList />} />
          <Route path="/add/doctor" element={<AddDoctor />} />
=======
          <Route path="/reservations/:doctorId/:reservationId" element={<SingleReservation />} />
          <Route path="/reservations/:userId/doctor/:doctorId" element={<ReservationList />} />
>>>>>>> c7063a22619638e5e9868f420ec10bae4d9d8236
        </Route>
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
