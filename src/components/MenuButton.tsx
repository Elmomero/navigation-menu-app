import { Dispatch, FC, SetStateAction } from "react";
import styles from "../styles/menuButton.module.css";
interface Props {
  buttonState: boolean;
  menuToggle: Dispatch<SetStateAction<boolean>>;
}

export const MenuButton: FC<Props> = ({ buttonState, menuToggle }) => {
  return (
    <img
      className={styles.menu__button}
      role="button"
      src={`${buttonState ? './images/icon-menu.svg' : './images/icon-close-menu.svg'}`}
      alt="menu-button"      
      onClick={() => menuToggle((state) => !state)}
    ></img>
  );
};
