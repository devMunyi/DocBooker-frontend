import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  const detailsUrl = '/doctors/1';
  return (
    <div className="doctor-details">
      <div className="doctor-details__header">
        <Link to={`${detailsUrl}`} className="btn btn-success btn-sm">
          <h2>{doctor.name}</h2>
        </Link>
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
