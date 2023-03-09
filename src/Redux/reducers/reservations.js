import { FETCH_RESERVATIONS, FETCH_RESERVATION } from '../actions/reservations';

// set initial state
const initialState = {
  reservations: [],
  reservation: {},
  isFetchingData: false,
};

// reducer
const reservationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_RESERVATIONS}/fulfilled`:
      return { ...state, reservations: payload, isFetchingData: false };

    case `${FETCH_RESERVATIONS}/pending`:
      return { ...state, isFetchingData: true };

    case `${FETCH_RESERVATIONS}/rejected`:
      return { ...state, isFetchingData: false };

    case `${FETCH_RESERVATION}/fulfilled`:
      return { ...state, reservation: payload, isFetchingData: false };

    case `${FETCH_RESERVATION}/pending`:
      return { ...state, isFetchingData: true };

    case `${FETCH_RESERVATION}/rejected`:
      return { ...state, isFetchingData: false };

    default:
      return state;
  }
};

export default reservationReducer;
