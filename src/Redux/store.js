import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorReducer from './reducers/doctors';
import reservationReducer from './reducers/reservations';
import selectedDoctorReducer from './reducers/selectedDoctor';
import allDoctors from './reducers/allDoctors';
import user from './reducers/user';
import reservationReducer from './reducers/reservations';

export default configureStore(
  {
    reducer: {
      doctor: doctorReducer,
      reservations: reservationReducer,
      selectedDoctor: selectedDoctorReducer,
      doctors: allDoctors,
      user,
      reservations: reservationReducer,
    },
  },
  applyMiddleware(logger),
);
