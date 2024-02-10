import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchListUser = createAsyncThunk(
  "users/fetchListUser",
  async (userId, thunkAPI) => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    return data;
  }
);

export interface User {
  id: number;
  name: string;
  email: string;
}

const initialState: { users: User[] } = {
  users: [],
};

// First, define the reducer and action creators via `createSlice`
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchListUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = action.payload;
    });
  },
});

// Destructure and export the plain action creators
// export const {   } = usersSlice.actions;

export default usersSlice.reducer;
