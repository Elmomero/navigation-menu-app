import { FC, useEffect, useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import styles from "../styles/menu.module.css";
interface Props {
  isClosed: boolean;
}
export const Menu: FC<Props> = ({ isClosed }) => {
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
    submenu__open,
    submenu2
  } = styles;
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const screenWidth = useScreenWidth()
  useEffect(() => {
    if (isClosed) {
      setFeaturesOpen(false);
      setCompanyOpen(false);
    }
  }, [isClosed]);
  

  return (
    <nav className={`${menu__container} ${isClosed ? menu__hidden : ""}`}>
      <ul className={menu}>
        <li className="" onClick={() => setFeaturesOpen((state) => !state)}>
          <div className={menu__item}>
            <p className={list__text}>Features</p>
            <span
              className={`${arrow} ${featuresOpen ? feature__img__open : ""}`}
            ></span>
          </div>
          <ul
            className={`${features__items} ${
              featuresOpen ? submenu__open : ""
            }`}
          >
            <li className={feature__item}>
              <img
                className={feature__img}
                src="./images/icon-todo.svg"
                alt="todoItem"
              />
              <p className={feature__text}>TodoList</p>
            </li>
            <li className={feature__item}>
              <img
                className={feature__img}
                src="./images/icon-calendar.svg"
                alt="calendarItem"
              />
              <p className={feature__text}>Calendar</p>
            </li>
            <li className={feature__item}>
              <img
                className={feature__img}
                src="./images/icon-reminders.svg"
                alt="remindersItem"
              />
              <p className={feature__text}>Reminders</p>
            </li>
            <li className={feature__item}>
              <img
                className={feature__img}
                src="./images/icon-planning.svg"
                alt="planningItem"
              />
              <p className={feature__text}>Planning</p>
            </li>
          </ul>
        </li>

        <li className="" onClick={() => setCompanyOpen((state) => !state)}>
          <div className={menu__item}>
            <p className={list__text}>Company</p>
            <span
              className={`${arrow} ${companyOpen ? feature__img__open : ""}`}
            ></span>
          </div>
          <ul
            className={`${features__items} ${
              companyOpen ? submenu__open : ""
            }`
          }
            id={`${screenWidth > 620 && companyOpen ? submenu2: ''}`}
          >
            <li className={feature__item}>History</li>
            <li className={feature__item}>Our Team</li>
            <li className={feature__item}>Blog</li>
          </ul>
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
