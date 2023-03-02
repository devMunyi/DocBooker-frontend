import React from 'react';
import PropTypes from 'prop-types';
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
