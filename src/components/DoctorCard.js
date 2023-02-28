import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD:src/components/DoctorCard.js
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { doctorAdded } from '../Redux/reducers/selectedDoctor';

function DoctorCard({ doctor }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detailsUrl = '/doctors/1';

  const doctorSelected = async () => {
    dispatch(doctorAdded(doctor));
    navigate(detailsUrl);
  };

  return (
    <div className="doctor-details">
      <div className="doctor-details__header">
        <button type="button" onClick={doctorSelected} className="btn btn-success btn-sm">
          <h2>{doctor.name}</h2>
        </button>
=======
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  const detailsUrl = '/doctors/1';
  return (
    <div className="doctor-details">
      <div className="doctor-details__header">
        <Link to={`${detailsUrl}`} className="btn btn-success btn-sm">
          <h2>{doctor.name}</h2>
        </Link>
>>>>>>> 04a24b0 (Add components and loggic for all doctors view and single doctors view):src/Components/DoctorCard.js
        <h3>{doctor.specialization}</h3>
      </div>
      <div className="doctor-details__body">
        <img src={doctor.photoUrl} alt="Doctor" />
        <p>{doctor.contact}</p>
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DoctorCard;
