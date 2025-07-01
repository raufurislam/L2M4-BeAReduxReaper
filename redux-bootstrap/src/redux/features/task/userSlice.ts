import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState = {
  users: [],
};

type DraftState = Pick<IUser, "name">;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, actions: PayloadAction<IUser>) => {
      const userData = createUser(actions.payload);
      state.users.push(userData);
    },
    removeUser: (state, actions: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== actions.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
