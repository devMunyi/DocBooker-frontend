import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { DatePicker } from 'antd';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';

function Reserve() {
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState(null);

  const { doctorId } = useParams(); // get doctor's id from url
  const userId = 1; // logged in user Id, here I just used a sample id as 1

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setFetchingData(true);
        const response = await axios.get(
          `http://localhost:3000/api/users/${userId}/doctors/${doctorId}`,
        );
        setDoctor(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetchingData(false);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  const handleDateChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    setDate(dateString);
  };

  const handleBook = async () => {
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
        {fetchingData ? (
          <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100vh', backgroundColor: '#589d1a' }}>
            <SyncOutlined spin style={{ fontSize: '32px' }} />
          </div>

        ) : (
          <>
            <img
              src={`${doctor?.picture}`}
              alt="Doctor"
              style={{ width: '100%', height: '100vh' }}
            />
            <div className="centered">
              <h1 className="doc-name pb-2">{`Dr ${doctor?.name} - ${doctor?.specialization}`}</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                provident et expedita perferendis dolore perspiciatis odio.
                Dignissimos, in deleniti pariatur alias odit explicabo vitae
                libero provident est placeat consectetur hic?
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
                  <button
                    className="btn btn-outline-light"
                    type="button"
                    disabled
                  >
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
          </>
        )}
      </div>
    </div>
  );
}

export default Reserve;
