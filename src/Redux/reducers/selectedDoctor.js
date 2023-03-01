import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDoctor: null,
};

const selectedDoctorSlice = createSlice({
  name: 'selectedDoctor',
  initialState,
  reducers: {
  /* eslint-disable no-param-reassign */
    doctorAdded(state, action) {
      state.selectedDoctor = action.payload;
    },
  /* eslint-enable no-param-reassign */
  },
});

export const { doctorAdded } = selectedDoctorSlice.actions;

export default selectedDoctorSlice.reducer;
