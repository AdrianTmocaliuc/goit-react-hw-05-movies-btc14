import { NavLink } from "react-router-dom";
import s from "./MenuBar.modal.scss";

function MenuBar() {
  return (
    <div className="main_menuBar">
      <NavLink
        to="/"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
        exact
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
        exact
      >
        Movies
      </NavLink>
    </div>
  );
}

export default MenuBar;
