import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { themeActions } from "./Theme";
import { Theme } from "./Theme";
function* themeMiddleware(action: { payload: Theme }) {
  console.log(action.payload);
  const data: any = action.payload;
  // const theme: Theme = yield put(themeActions.ChangeTheme(data));

  localStorage.setItem("theme", JSON.stringify(action.payload));
}
function* localstoragemiddleware() {
  yield takeLatest<any>("Theme/ChangeTheme", themeMiddleware);
  console.log("running ");
}
export default localstoragemiddleware;
