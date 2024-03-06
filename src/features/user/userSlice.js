import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  photo: "",
  email: "",
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserLogout: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLogin, setUserLogout } = userSlice.actions;

export const selectUserPhoto = (state) => state.user.photo;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;
