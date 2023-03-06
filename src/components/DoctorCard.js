import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { doctorAdded } from '../Redux/reducers/selectedDoctor';
import './css/doctor_card.css';

function DoctorCard({ doctor }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detailsUrl = '/doctors/1';

  const doctorSelected = async () => {
    dispatch(doctorAdded(doctor));
    navigate(detailsUrl);
  };

  return (
    <button type="button" onClick={doctorSelected} className="doctor-card-buttonwrap">
      <div className="doctor-card-details">

        <div className="doctor-image">
          <img src={doctor.picture} alt="Doctor" />
        </div>
        <div className="doctor-information">
          <h2>{doctor.name}</h2>
          <p>
            {' '}
            I am a
            {' '}
            {doctor.specialization.toLowerCase()}
          </p>
          <p>
            {' '}
            Email me at:
            <br />
            {' '}
            {doctor.email}
          </p>
        </div>
      </div>
    </button>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DoctorCard;
