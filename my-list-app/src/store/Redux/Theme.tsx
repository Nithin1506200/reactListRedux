import { createSlice } from "@reduxjs/toolkit";
const themeVariables: any = document.querySelector(":root");
const mainTheme = [
  "--front",
  "--middle",
  "--middle2",
  "--back",
  "--border",
  "--back2",
];
const lightTheme = [
  "--front-light",
  "--middle-light",
  "--middle2--light",
  "--back-light",
  "--border-light",
  "--back2-light",
];
const darkTheme = [
  "--front-dark",
  "--middle-dark",
  "--middle2-dark",
  "--back-dark",
  "--border-dark",
  "--back2-dark",
];
const neonTheme = [
  "--front-neon",
  "--middle-neon",
  "--middle2-neon",
  "--back-neon",
  "--border-neon",
  "--back2-neon",
];
export type Theme = "LIGHT" | "DARK";
const ThemeSlice = createSlice({
  name: "Theme",
  initialState: "LIGHT",
  reducers: {
    ChangeTheme(state: string, action: { payload: Theme }) {
      if (action.payload === "LIGHT") {
        for (let i = 0; i < mainTheme.length; i++) {
          themeVariables.style.setProperty(
            mainTheme[i],
            `var(${lightTheme[i]})`
          );
        }
      } else if (action.payload === "DARK") {
        for (let i = 0; i < mainTheme.length; i++) {
          themeVariables.style.setProperty(
            mainTheme[i],
            `var(${darkTheme[i]})`
          );
        }
      } else if (action.payload === "NEON") {
        for (let i = 0; i < mainTheme.length; i++) {
          themeVariables.style.setProperty(
            mainTheme[i],
            `var(${neonTheme[i]})`
          );
        }
      }
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});
export const themeReducer = ThemeSlice.reducer;
export const themeActions = ThemeSlice.actions;
