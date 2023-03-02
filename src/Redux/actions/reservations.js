/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FETCH_RESERVATIONS = 'fectch_reservations';
export const FETCH_RESERVATION = 'fectch_reservation';

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

// action creator to fetch just one reservation
export const fetchReservation = createAsyncThunk(
  FETCH_RESERVATION,
  async ({ userId, doctorId, reservationId }) => {
    const { data } = await axios(
      `http://localhost:3000/api/users/${userId}/doctors/${doctorId}/reservations/${reservationId}`,
    );
    return data;
  },
);
