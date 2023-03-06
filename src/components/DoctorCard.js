import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { doctorAdded } from '../Redux/reducers/selectedDoctor';
import './css/doctor_card.css';

function DoctorCard({ doctor, canDelete }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detailsUrl = `/doctors/${doctor.id}`;

  const doctorSelected = async () => {
    dispatch(doctorAdded(doctor));
    navigate(detailsUrl);
  };

  const deleteDoctor = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${user.id}/doctors/${doctor.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        toast.success('Doctor deleted successfully!');
        navigate('/');
      } else {
        throw new Error('Failed to delete doctor');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete doctor');
    }
  };

  return (
    <div className="doctor-card-details">
      <button type="button" onClick={doctorSelected} className="doctor-card-buttonwrap">
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
      </button>
      {
          canDelete
          && <button className="delete-doctor-button" type="button" onClick={deleteDoctor}>Delete</button>
        }
    </div>
  );
}

DoctorCard.defaultProps = {
  canDelete: false,
};

DoctorCard.propTypes = {
  doctor: PropTypes.oneOfType([PropTypes.object]).isRequired,
  canDelete: PropTypes.bool,
};

export default DoctorCard;
