import { FETCH_RESERVATIONS } from '../actions/reservations';

// set initial state
const initialState = {
  reservations: [],
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

    default:
      return state;
  }
};

export default reservationReducer;
