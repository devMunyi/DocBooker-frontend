import React, { useState } from 'react';

function AddDoctor() {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [availableDates, setAvailableDates] = useState([]);

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setCurrentTime(e.target.value);
  };

  const handleAddDate = () => {
    setAvailableDates([
      ...availableDates,
      {
        date: currentDate,
        availableTimes: [],
      },
    ]);
    setCurrentDate('');
  };

  const handleAddTime = () => {
    const updatedDates = [...availableDates];
    const index = updatedDates.findIndex((date) => date.date === currentDate);
    if (index >= 0) {
      const updatedDate = {
        ...updatedDates[index],
        availableTimes: [...updatedDates[index].availableTimes, currentTime],
      };
      updatedDates[index] = updatedDate;
      setAvailableDates(updatedDates);
      setCurrentTime('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit doctor data and availableDates to the API
    console.log({ name, speciality, availableDates });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <br />
      <div>
        Speciality:
        <input type="text" value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
      </div>
      <br />
      <div>
        Available dates:
        <br />
        <input type="date" value={currentDate} onChange={handleDateChange} />
        <button type="button" onClick={handleAddDate}>Add Date</button>
        <br />
        {availableDates.map((dateData) => (
          <div key={dateData.date}>
            <div>
              Date:
              {' '}
              {dateData.date}
              <br />
              {
                dateData.availableTimes?.length < 0 ?
                dateData.availableTimes.map((time) => {
                  <input type="time" value={time} onChange={() => handleTimeChange(time)} />
                }) 
                :
                <>
                  <input type="time" value={currentTime} onChange={(event) => handleTimeChange()} />
                </>
              }
              <button type="button" onClick={(event) => handleTimeChange()}>Add Time</button>
              <br />
              Available times:
              {' '}
              {dateData.availableTimes?.join(', ') || 'None'}
            </div>
          </div>
        ))}
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddDoctor;
