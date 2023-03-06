import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchReservations } from '../Redux/actions/reservations';
import { fetchDoctors } from '../Redux/reducers/allDoctors';
import { fetchSingleDoctor } from '../Redux/actions/doctors';
// eslint-disable-next-line import/no-named-as-default
import NavBar from '../components/NavBar';

function ReservationList() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  // const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = useSelector((state) => state.doctors.doctors);
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;
  let doctorId;
  const navigate = useNavigate();

  const params = useMemo(() => ({ userId, doctorId }), [userId, doctorId]);
  useEffect(() => {
    dispatch(fetchReservations(params));
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(fetchDoctors(params));
  }, [dispatch, params]);

  useEffect(() => {
    if (params.doctorId > 0) {
      dispatch(fetchSingleDoctor(params));
    }
  }, [dispatch, params]);

  const handleDoctorChange = (event) => {
    const selectedDoctorId = event.target.value;
    navigate('/my-reservations');
    dispatch(fetchReservations({ userId, doctorId: selectedDoctorId }));
    dispatch(fetchDoctors({ userId, doctorId: selectedDoctorId }));
    dispatch(fetchSingleDoctor({ doctorId: selectedDoctorId, userId }));
  };

  return (
    <div className="page">
      <NavBar />
      <main className="container">
        <h1 className="mt-3">My Reservations</h1>
        <div className="mt-3">Select a doctor:</div>
        <select id="doctor-select" value={doctorId} onChange={handleDoctorChange} className="form-select mb-3">
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
          ))}
        </select>
        {reservations && (
        <div className="mt-3">
          <ul className="list-group">
            {reservations.map((reservation) => (
              <li key={reservation.id} className="list-group-item">
                {reservation.date}
                {' '}
                -
                {reservation.doctor_name}
                {' '}
                -
                {reservation.specialization}
              </li>
            ))}
          </ul>
        </div>
        )}
      </main>
    </div>
  );
}
export default ReservationList;
