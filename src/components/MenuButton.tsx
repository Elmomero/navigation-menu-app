import { Dispatch, FC, SetStateAction } from "react";
import styles from "../styles/menuButton.module.css";
interface Props {
  menuToggle: Dispatch<SetStateAction<boolean>>;
}
export const MenuButton: FC<Props> = ({ menuToggle }) => {
  return (
    <div
      className={styles.menu__button}
      role="button"
      onClick={() => menuToggle((state) => !state)}
    ></div>
  );
};
