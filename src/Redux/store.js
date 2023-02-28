import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorReducer from './reducers/doctors';
import reservationReducer from './reducers/reservations';

export default configureStore(
  {
    reducer: {
      doctor: doctorReducer,
      reservations: reservationReducer,
    },
  },
  applyMiddleware(logger),
);
