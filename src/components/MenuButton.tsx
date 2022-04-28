import { Dispatch, FC, SetStateAction } from "react";
import styles from "../styles/menuButton.module.css";
interface Props {
  buttonState: boolean;
  menuToggle: Dispatch<SetStateAction<boolean>>;
}

export const MenuButton: FC<Props> = ({ buttonState, menuToggle }) => {
  return (
    <div
      className={`${styles.menu__button} ${
        !buttonState ? styles.menu__active : ""
      }`}
      role="button"
      onClick={() => menuToggle((state) => !state)}
    ></div>
  );
};
