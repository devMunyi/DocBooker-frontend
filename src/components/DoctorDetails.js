import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import './css/doctor_details.css';

function DoctorDetails({ doctor }) {
  return (
    <div className="doctor-details">
      <div className="doctor-image">
        <img src={doctor.picture} alt="Doctor" />
      </div>

      <div className="doctor-information">
        <h2>{doctor.name}</h2>
        <h3>{doctor.specialization}</h3>
        <p>{doctor.email}</p>

        <div className="book-appointment">
          <Link to={`/reserve/${doctor.id}`}>
            <button type="button">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

DoctorDetails.propTypes = {
  doctor: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DoctorDetails;
