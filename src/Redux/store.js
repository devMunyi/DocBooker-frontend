import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorReducer from './reducers/doctors';

export default configureStore(
  {
    reducer: {
      doctor: doctorReducer,
    },
  },
  applyMiddleware(logger),
);
