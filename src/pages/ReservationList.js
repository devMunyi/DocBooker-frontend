import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReservations } from '../Redux/actions/reservations';
import NavBar from '../components/NavBar';

function ReservationList() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  console.log('-------------------');
  console.log(reservations);
  console.log('-------------------');
  const { userId, doctorId } = useParams();
  const params = useMemo(() => ({ userId, doctorId }), [userId, doctorId]);

  useEffect(() => {
    dispatch(fetchReservations(params));
  }, [dispatch, params]);
  return (
    <div className="page">
      <NavBar />
      <main className="content">
        <h1>My Reservations</h1>
        {reservations
          && reservations.map((reservation) => (
            <div className="res-list card" key={reservation.id}>
              <div>{reservation.doctor_name}</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>{reservation.specialization}</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>{reservation.date}</div>
            </div>
          ))}
      </main>
    </div>
  );
}

export default ReservationList;
