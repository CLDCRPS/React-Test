import React from "react";
import Button from "../Button/Button";

import style from "./Navbar.module.scss";

const Navbar = ({ onClick }) => {
  return (
    <nav className={style.nav}>
      <a>Сортировка</a>
      <div className={style.item}>
        <Button className={style.navBtn} text="по городу" onClick={() => onClick("city")}></Button>
      </div>
      <div className={style.item}>
        <Button className={style.navBtn} text="по компании" onClick={() => onClick("company")}></Button>
      </div>
    </nav>
  );
};

export default Navbar;
