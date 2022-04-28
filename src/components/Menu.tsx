import { FC, useState } from "react";
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
    menu__hidden,
    features__items,
    feature__item,
    feature__img,
    feature__img__open,
    feature__text,
    submenu__closed,
  } = styles;
  const [featuresClosed, setFeaturesClosed] = useState(true)
  const [companyClosed, setCompanyClosed] = useState(true)
  return (
    <nav className={ `${menu__container} ${isOpen ? menu__hidden : ''}`}>
      <ul className={menu}>
        <li className={menu__item} onClick={()=>setFeaturesClosed(state=>!state)}>
          <p className={list__text}>Features</p> 
          <span className={`${arrow} ${!featuresClosed ? feature__img__open : ''}`}></span>
        </li>
        <ul className={`${features__items} ${featuresClosed ? submenu__closed : ''}`}>
          <li className={feature__item}>
            <img className={feature__img} src="./images/icon-todo.svg" alt="todoItem" />
            <p className={feature__text}>TodoList</p>
          </li>
          <li className={feature__item}>
            <img className={feature__img} src="./images/icon-calendar.svg" alt="calendarItem" />
            <p className={feature__text}>Calendar</p>
          </li>
          <li className={feature__item}>
            <img className={feature__img} src="./images/icon-reminders.svg" alt="remindersItem" />
            <p className={feature__text}>Reminders</p>
          </li>
          <li className={feature__item}>
            <img className={feature__img} src="./images/icon-planning.svg" alt="planningItem" />
            <p className={feature__text}>Planning</p>
          </li>
        </ul>
        <li className={menu__item} onClick={()=> setCompanyClosed(state=>!state)}>
          <p className={list__text}>Company</p> 
          <span className={`${arrow} ${!companyClosed ? feature__img__open : ''}`}></span>
        </li>
        <ul className={`${features__items} ${companyClosed ? submenu__closed : ''}`}>
            <li className={feature__item}>
              History
            </li>
            <li className={feature__item}>
              Our Team
            </li>
            <li className={feature__item}>
              Blog
            </li>
        </ul>
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
