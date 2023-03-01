import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  /* eslint-disable no-param-reassign */
    setUser(state, action) {
      state.user = action.payload;
    },
  /* eslint-enable no-param-reassign */
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
