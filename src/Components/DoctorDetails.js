import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './css/doctor_details.css';

function DoctorDetails({ doctor }) {
  const [selectedDate, setSelectedDate] = useState({
    date: null,
    availableTimes: null,
  });
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState('');

  const handleDetailsChange = (event) => {
    setAppointmentDetails(event.target.value);
  };

  const handleDateChange = (date) => {
    const isoDate = date.toISOString();
    const formattedDate = isoDate.substring(0, 10);
    const selected = Object.values(doctor.availableDates).find((dt) => dt.date === formattedDate);
    console.log(selected);
    if (selected && selected.date) {
      setSelectedDate(selected);
    }

    setSelectedTime(null);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = () => {
    const appointment = {
      doctorId: doctor.id,
      date: selectedDate.date,
      time: selectedTime,
      details: appointmentDetails,
    };

    fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment),
    })
      .then((response) => {
        if (response.ok) {
          // appointment was successfully booked
          // redirect to confirmation page or display success message
          console.log('ok');
        } else {
          console.log('error in data received');
        }
      })
      .catch((error) => {
        console.log('error in receiving data from api', error);
      });
  };

  const getDateValue = (dateString) => {
    if (dateString) {
      return new Date(dateString);
    }
    return false;
  };

  const getDatesArray = Object.values(doctor.availableDates).map((availableTime) => new Date(`${availableTime.date}T00:00:00Z`));

  return (
    <div className="doctor-details">
      <div className="doctor-details__header">
        <h2>{doctor.name}</h2>
        <h3>{doctor.specialization}</h3>
      </div>
      <div className="doctor-details__body">
        <img src={doctor.photoUrl} alt="Doctor" />
        <p>{doctor.contact}</p>

        <div className="doctor-details__calendar">
          <h4>Select appointment date:</h4>
          <DatePicker
            selected={getDateValue(selectedDate.date)}
            onChange={() => handleDateChange}
            onSelect={handleDateChange}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            includeDates={getDatesArray}
            placeholderText="Select date"
            showYearDropdown
            showMonthDropdown
          />
        </div>

        <div className="doctor-details__time">
          <h4>Select appointment time:</h4>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">-- Select time --</option>
            {
              selectedDate.availableTimes === null
                ? <div>Here</div>
                : selectedDate.availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))
              }
          </select>
        </div>

        <div className="appointment-details">
          <h4>Appointment details:</h4>
          <input type="text" value={appointmentDetails} onChange={handleDetailsChange} />
        </div>

        <div className="doctor-details__book-appointment">
          <button type="button" disabled={!selectedDate || !selectedTime} onClick={handleSubmit}>
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
