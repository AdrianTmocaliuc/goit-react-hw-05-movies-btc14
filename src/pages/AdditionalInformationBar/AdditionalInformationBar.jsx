import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AdditionalInformationBar.module.scss";
import PropTypes from "prop-types";

function AdditionalInformationBar({ path }) {
  console.log("path", path);
  return (
    <div className={s.addInformation_MenuBar} style={{ padding: "15px" }}>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to={`${path}/cast`} activeStyle={{ color: "red" }} exact>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`${path}/reviews`} activeStyle={{ color: "red" }} exact>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalInformationBar;

AdditionalInformationBar.propTypes = {
  path: PropTypes.string.isRequired,
};
