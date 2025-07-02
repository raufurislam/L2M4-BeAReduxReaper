import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { users: IUser[] } = {
  users: [
    {
      name: "Ivor",
      id: "7102e90c-5409-4b5e-aea5-6ec7567d2957",
    },
    {
      name: "Logan",
      id: "71020c-5409-4b5e-aea5-6ec7567d2957",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
