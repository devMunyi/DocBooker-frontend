import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const doctorsURL = '';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  const response = await fetch(doctorsURL, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
});

const initialState = {
  doctors: [],
  status: '',
  error: null,
};

const doctorsSlice = createSlice({
  name: 'randomess',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    /* eslint-disable no-param-reassign */
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.message = action.payload.body;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    /* eslint-enable no-param-reassign */
  },
});

export default doctorsSlice.reducer;
