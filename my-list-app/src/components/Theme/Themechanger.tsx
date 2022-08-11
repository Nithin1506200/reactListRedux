import style from "./theme.module.scss";
import { useDispatch } from "react-redux";
import { themeActions } from "../../store/Redux/Theme";

import { Theme } from "../../store/Redux/Theme";
export default function Themechanger() {
  const dispatch = useDispatch();
  function switchTheme(e: any) {
    dispatch(themeActions.ChangeTheme(e.target.value));
  }
  return (
    <div className={style.theme}>
      <button className={style.light} onClick={switchTheme} value="LIGHT">
        Light
      </button>
      <button className={style.dark} onClick={switchTheme} value="DARK">
        Dark
      </button>
      <button className={style.neon} onClick={switchTheme} value="NEON">
        Neon
      </button>
    </div>
  );
}
