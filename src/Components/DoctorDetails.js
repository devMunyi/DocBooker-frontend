import React from 'react';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import './css/doctor_details.css';

function DoctorDetails({ doctor }) {
  return (
    <div className="doctor-details">
      <div className="doctor-details__header">
        <h2>{doctor.name}</h2>
        <h3>{doctor.specialization}</h3>
      </div>
      <div className="doctor-details__body">
        <img src={doctor.photoUrl} alt="Doctor" />
        <p>{doctor.contact}</p>

        <div className="doctor-details__book-appointment">
          <button type="button">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

DoctorDetails.propTypes = {
  doctor: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DoctorDetails;
