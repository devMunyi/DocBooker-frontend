import { FETCH_DOCTOR } from '../actions/doctors';

// set initial state
const initialState = {
  // doctorsList: [],
  singleDoctor: {},
  isFetchingData: false,
};

// reducer
const doctorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_DOCTOR}/fulfilled`:
      return { ...state, singleDoctor: payload, isFetchingData: false };

    case `${FETCH_DOCTOR}/pending`:
      return { ...state, isFetchingData: true };

    case `${FETCH_DOCTOR}/rejected`:
      return { ...state, isFetchingData: false };

    default:
      return state;
  }
};

export default doctorReducer;
