import { createSlice } from "@reduxjs/toolkit";
import testUsers from "../../test/users";
import { UserInterface } from "../../util/userinfo";

const initialUsers = testUsers;
const userSlice = createSlice({
  name: "Users",
  initialState: initialUsers,
  reducers: {
    Add(state: UserInterface[], action: { payload: UserInterface }) {
      state.push(action.payload);
      return state;
    },
    Delete(state: UserInterface[], action: { payload: string }) {
      state = state.filter((user) => {
        console.log(user);
        return user.id !== action.payload;
      });
      return state;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
