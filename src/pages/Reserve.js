import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { DatePicker } from 'antd';
import { toast } from 'react-toastify';

function Reserve() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const { doctorId } = useParams();
  // const antIcon = (
  //   <LoadingOutlined
  //     style={{
  //       fontSize: 24,
  //     }}
  //     spin
  //   />
  // );

  const handleDateChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    setDate(dateString);
  };

  const handleBook = async () => {
    const userId = 1; // logged in user Id, here I just used a sample id as 1
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:3000/api/users/${userId}/doctors/${doctorId}/reservations`,
        {
          reservation: {
            user_id: userId,
            doctor_id: doctorId,
            date,
            details: 'Some details',
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const { data } = response;
      if (response.status === 201) {
        toast.success('Reservation booked successfully!');
        console.log('Reservation booked successfully!', data);
      } else {
        throw new Error(data.message || 'Failed to book reservation');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to book reservation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="reserve-page" className="reservePage">
      <div className="container-fluid reservePage">
        <img
          src={`${process.env.PUBLIC_URL}/doctor.png`}
          alt="Doctor"
          style={{ width: '100%', height: '100vh' }}
        />
        <div className="centered">
          <h1 className="doc-name pb-2">Dr. Lee - Dermatologist</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            provident et expedita perferendis dolore perspiciatis odio.
            Dignissimos, in deleniti pariatur alias odit explicabo vitae libero
            provident est placeat consectetur hic?
          </p>

          <div className="d-flex gap-3 justify-content-center">
            <DatePicker
              showTime
              onChange={handleDateChange}
              className="date-picker"
            />
          </div>

          <div className="d-flex gap-3 justify-content-center mt-4">
            <Link
              to={`/doctors/${doctorId}`}
              className="btn btn-outline-light pb-0"
            >
              Go Back
            </Link>
            {loading ? (
              <button className="btn btn-outline-light" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleBook}
                className="btn btn-outline-light"
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
