import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DoctorDetails(props) {
  const { doctor } = props;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = () => {
    const appointment = {
      doctorId: doctor.id,
      date: selectedDate,
      time: selectedTime,
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
        } else {
          // handle error case
        }
      })
      .catch((error) => {
        // handle network error
      });
  };

  const availableDates = doctor.availableDates.map((availableDate) => {
    const availableTimes = availableDate.times.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
    return (
      <optgroup key={availableDate.date} label={availableDate.date}>
        {availableTimes}
      </optgroup>
    );
  });

  return (
    <div>
      <h2>{doctor.name}</h2>
      <h3>{doctor.specialization}</h3>
      <img src={doctor.photoUrl} alt="Doctor" />
      <p>{doctor.contact}</p>
      <div>
        <h4>Select appointment date:</h4>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          filterDate={(date) =>
            doctor.availableDates.some(
              (availableDate) =>
                availableDate.date.getTime() === date.getTime()
            )
          }
        />
      </div>
      {selectedDate && (
        <div>
          <h4>Select appointment time:</h4>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">-- Select time --</option>
            {availableDates.find(
              (availableDate) =>
                availableDate.props.label === selectedDate.toDateString()
            )}
          </select>
        </div>
      )}
      <button disabled={!selectedDate || !selectedTime} onClick={handleSubmit}>
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorDetails;
