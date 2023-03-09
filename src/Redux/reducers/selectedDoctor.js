import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDoctor = createAsyncThunk('doctors/fetchDoctor', async (doctorId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await fetch(`http://localhost:3000/api/users/${user.username}/doctors/${doctorId}`, {
    method: 'GET',
    mode: 'cors',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Failed to fetch doctor');
});

const initialState = {
  selectedDoctor: {},
  status: '',
  error: null,
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
  extraReducers(builder) {
    /* eslint-disable no-param-reassign */
    builder
      .addCase(fetchDoctor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.selectedDoctor = action.payload;
      })
      .addCase(fetchDoctor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'error occured';
      });
    /* eslint-enable no-param-reassign */
  },
});

export const { doctorAdded } = selectedDoctorSlice.actions;

export default selectedDoctorSlice.reducer;
