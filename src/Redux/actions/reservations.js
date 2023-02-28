/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const FETCH_RESERVATIONS = 'reservations_list';
export const FETCH_RESERVATIONS = 'fectch_reservations';

// action creator to fetch just a list of reservations
export const fetchReservations = createAsyncThunk(
  FETCH_RESERVATIONS,
  async (params) => {
    const { data } = await axios(
      `http://localhost:3000/api/users/${params.userId}/doctors/${params.doctorId}/reservations`,
    );
    return data;
  },
);
