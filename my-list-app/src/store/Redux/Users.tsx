import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

import { UserInterface } from "../../util/userinfo";
function setlocalstorage(data: any) {
  localStorage.setItem("users", JSON.stringify(data));
}
const userSlice = createSlice<
  UserInterface[],
  SliceCaseReducers<UserInterface[]>,
  string
>({
  name: "Users",
  initialState: [],
  reducers: {
    Add(state: UserInterface[], action: { payload: UserInterface }) {
      state.push(action.payload);
      setlocalstorage(state);
      return state;
    },
    Insert(state: UserInterface[], action: { payload: UserInterface[] }) {
      action.payload.forEach((element) => state.push(element));
      setlocalstorage(state);
      return state;
    },
    Delete(state: UserInterface[], action: { payload: string }) {
      state = state.filter((user) => {
        // console.log(user);
        return user.id !== action.payload;
      });
      setlocalstorage(state);
      return state;
    },
    Edit(state: UserInterface[], action: { payload: UserInterface }) {
      state = state.map((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return user;
      });
      setlocalstorage(state);
      return state;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
