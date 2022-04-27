import React from "react";
import s from "./RenderList.module.scss";
import defImage from "components/images/picture.jpg";

function RenderList({ castList, reviewsList }) {
  // console.log("castList", castList);
  return (
    <ul>
      {castList &&
        castList.map((el) => {
          return (
            <li key={el.id} className={s.item}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                    : defImage
                }
                alt=""
                style={{ width: "60px" }}
              />
              <p>{el.name}</p>
            </li>
          );
        })}
      {reviewsList &&
        reviewsList.map((el) => {
          return (
            <li key={el.id}>
              <h4>{el.author}</h4>
              <p>{el.content}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default RenderList;
