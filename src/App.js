import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
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
import SingleReservation from './pages/SingleReservation';
import UpdateReservation from './pages/UpdateReservation';
import LoginSignUp from './pages/LoginSignUp';

function ProtectedRoute() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? <Outlet /> : <Navigate to="/login" />;
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
          <Route path="reservation/edit/:reservationId" element={<UpdateReservation />} />
          <Route
            path="/reservations/:doctorId/:reservationId"
            element={<SingleReservation />}
          />
          <Route
            path="/reservations/:userId/doctor/:doctorId"
            element={<ReservationList />}
          />
        </Route>
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
