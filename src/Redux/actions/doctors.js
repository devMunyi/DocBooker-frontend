import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const FETCH_DOCTORS = 'doctors_list';
export const FETCH_DOCTOR = 'fectch_doctor';

// action creator to fetch just a single doctor
export const fetchSingleDoctor = createAsyncThunk(
  FETCH_DOCTOR,
  async ({ doctorId, userId }) => {
    const { data } = await axios(`http://localhost:3000/api/users/${userId}/doctors/${doctorId}`);
    return data;
  },
);
