import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { DatePicker } from 'antd';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import moment from 'moment';
import { fetchSingleDoctor } from '../Redux/actions/doctors';

function Reserve() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { doctorId } = useParams(); // get doctor's id from url
  const userId = JSON.parse(localStorage.getItem('user')).id; // grab logged in user id

  // get single doctor info form redux store
  const { singleDoctor, isFetchingData } = useSelector(
    (state) => state?.doctor,
  );

  // fetch a single doctor
  useEffect(() => {
    dispatch(fetchSingleDoctor({ doctorId, userId }));
  }, [dispatch, doctorId, userId]);

  const handleDateChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    setDate(dateString);
  };

  localStorage.setItem('doctor', JSON.stringify(singleDoctor));

  const handleBook = async () => {
    try {
      setIsProcessing(true);
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
      const { id } = data;
      if (response.status === 201) {
        toast.success('Reservation booked successfully!');
        setTimeout(() => {
          navigate(`/reservations/${doctorId}/${id}`);
        }, 2500);
      } else {
        throw new Error(data.message || 'Failed to book reservation');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to book reservation');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div id="reserve-page" className="reservePage">
      <div className="container-fluid reservePage">
        {isFetchingData ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor: '#589d1a',
            }}
          >
            <SyncOutlined spin style={{ fontSize: '32px' }} />
          </div>
        ) : (
          <>
            <img
              src={`${singleDoctor?.picture}`}
              alt="Doctor"
              style={{ width: '100%', height: '100vh' }}
            />
            <div className="centered">
              <h1 className="doc-name pb-2">{`Dr ${singleDoctor?.name} - ${singleDoctor?.specialization}`}</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                provident et expedita perferendis dolore perspiciatis odio.
                Dignissimos, in deleniti pariatur alias odit explicabo vitae
                libero provident est placeat consectetur hic?
              </p>

              <div className="d-flex gap-3 justify-content-center">
                <DatePicker
                  format="YYYY-MM-DD"
                  onChange={handleDateChange}
                  className="date-picker rounded-0"
                  disabledDate={(current) => current && current.valueOf() < moment().subtract(1, 'days')}
                />
              </div>

              <div className="d-flex gap-3 justify-content-center mt-4">
                <Link
                  to={`/doctors/${doctorId}`}
                  className="btn btn-outline-light pb-0"
                >
                  Go Back
                </Link>
                {isProcessing ? (
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
