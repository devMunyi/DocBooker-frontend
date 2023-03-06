import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, SyncOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import NavBar from '../components/NavBar';
import { fetchReservation } from '../Redux/actions/reservations';
import { fetchSingleDoctor } from '../Redux/actions/doctors';

function SingleReservation() {
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();
  const { reservationId, doctorId } = useParams();
  const navigate = useNavigate();

  const userId = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).id
    : null;

  if (!userId === null) {
    navigate('/login');
  }

  useEffect(() => {
    console.log('Called');
    dispatch(fetchReservation({ userId, doctorId, reservationId }));
    dispatch(fetchSingleDoctor({}));
  }, [dispatch, userId, doctorId, reservationId]);

  const { reservation, isFetchingData } = useSelector(
    (state) => state.reservations,
  );

  localStorage.setItem('reservation', JSON.stringify(reservation));

  const handleUpdateBtnClick = () => {
    navigate(`/reservation/edit/${reservation.id}`);
  };

  const handleDelete = async () => {
    try {
      setIsProcessing(true);

      const response = await axios.delete(
        `http://localhost:3000/api/users/${userId}/doctors/${doctorId}/reservations/${reservationId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const { data } = response;
      if (response.status === 204) {
        toast.warning('Reservation deleted successfully!');

        navigate(`/reservations/${userId}/doctor/${doctorId}`);
      } else {
        throw new Error(data.message || 'Failed to delete reservation');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete reservation');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="page OneReservationPage">
      <NavBar />
      <main className="content">
        <h1>Reservation Details</h1>
        {isFetchingData ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: '100%',
            }}
          >
            <SyncOutlined spin style={{ fontSize: '32px', color: '#589d1a' }} />
          </div>
        ) : (
          <div className="row">
            <div className="col-md-9">
              <table className="table table-bordered">
                <tbody className="">
                  <tr>
                    <th scope="row">Doctor Name</th>
                    <td>{reservation.doctorname}</td>
                  </tr>
                  <tr>
                    <th scope="row">Specialization</th>
                    <td>{reservation.specialization}</td>
                  </tr>
                  <tr>
                    <th scope="row">Date</th>
                    <td>{reservation.date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-column gap-3 actions justify-content-center align-items-center">
                <button
                  onClick={handleUpdateBtnClick}
                  type="button"
                  className="btn btn-outline-info btn-sm d-flex justify-content-center align-items-center gap-2"
                >
                  {' '}
                  <EditOutlined />
                  {' '}
                  <span>Update</span>
                </button>
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
                    onClick={handleDelete}
                    type="button"
                    className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center gap-2"
                  >
                    <DeleteOutlined />
                    {' '}
                    <span>Delete</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default SingleReservation;
