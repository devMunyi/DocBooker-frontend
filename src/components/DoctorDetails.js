import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiLeftArrow } from 'react-icons/bi';
import 'react-datepicker/dist/react-datepicker.css';
import './css/doctor_details.css';

function DoctorDetails({ doctor }) {
  return (
    <div className="doctor-details-container">
      <div className="doctor-details">
        <div className="doctor-image">
          <img src={doctor.picture} alt="Doctor" />
        </div>

        <div className="doctor-information">
          <h2>{doctor.name}</h2>
          <h3 className="content-grey-bg">
            <span>Specialtization: </span>
            <span>{doctor.specialization}</span>
          </h3>
          <h3>
            <span>Email: </span>
            <span>{doctor.email}</span>
          </h3>
          <div className="book-appointment">
            <Link to={`/reserve/${doctor.id}`}>
              <button type="button">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="go-back-button">
        <Link to="/">
          <button className="prev-page-button" type="button">
            <BiLeftArrow />
          </button>
        </Link>
      </div>
    </div>

  );
}

DoctorDetails.propTypes = {
  doctor: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DoctorDetails;
