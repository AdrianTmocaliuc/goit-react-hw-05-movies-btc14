import React from "react";
import s from "./RenderList.module.scss";
import defImage from "components/images/picture.jpg";
import PropTypes from "prop-types";

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

RenderList.propTypes = {
  castList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
  reviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
