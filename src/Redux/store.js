import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorReducer from './reducers/doctors';
import selectedDoctorReducer from './reducers/selectedDoctor';
import allDoctors from './reducers/allDoctors';
import user from './reducers/user';
import reservationReducer from './reducers/reservations';

export default configureStore(
  {
    reducer: {
      doctor: doctorReducer,
      selectedDoctor: selectedDoctorReducer,
      doctors: allDoctors,
      // eslint-disable-next-line object-shorthand
      user: user,
      reservations: reservationReducer,
    },
  },
  applyMiddleware(logger),
);
