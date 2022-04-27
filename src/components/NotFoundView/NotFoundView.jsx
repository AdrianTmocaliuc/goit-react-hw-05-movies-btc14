import React from "react";
import s from "./NotFoundView.module.scss";

function NotFoundView() {
  return (
    <div className={s.error}>
      <h1>Not found &#x2639;</h1>
    </div>
  );
}

export default NotFoundView;
