import { FC } from "react";
import styles from "../styles/menu.module.css";
interface Props{
  isOpen : boolean
}
export const Menu:FC<Props> = ({isOpen}) => {
  const {
    menu__container,
    menu,
    menu__item,
    arrow,
    register__options,
    register__button,
    list__text,
    menu__hidden
  } = styles;
  return (
    <nav className={ `${menu__container} ${isOpen ? menu__hidden : ''}`}>
      <ul className={menu}>
        <li className={menu__item}>
          <p className={list__text}>Features</p> 
          <span className={arrow}></span>
        </li>
        <li className={menu__item}>
          <p className={list__text}>Company</p> 
          <span className={arrow}></span>
        </li>
        <li className={menu__item}>
          <p className={list__text}>Career</p>
        </li>
        <li className={menu__item}>
          <p className={list__text}>About</p>
        </li>
      </ul>
      <div className={register__options}>
        <button className={register__button}>Login</button>
        <button className={register__button}>Register</button>
      </div>
    </nav>
  );
};
