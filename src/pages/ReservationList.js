import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchReservations } from '../Redux/actions/reservations';
import { fetchDoctors } from '../Redux/reducers/allDoctors';
import { fetchSingleDoctor } from '../Redux/actions/doctors';
import NavBar from '../components/NavBar';

function ReservationList() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const doctor = useSelector((state) => state.doctors.doctor);
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
      <main className="content">
        <h1>My Reservations</h1>
        <div>Select a doctor:</div>
        <select id="doctor-select" value={doctorId} onChange={handleDoctorChange}>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
          ))}
        </select>
        {reservations && doctor
          && (
          <div>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
            <ul>
              {reservations.map((reservation) => (
                <li key={reservation.id}>
                  {reservation.date}
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
