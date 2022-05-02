import React from "react";

function Button({ type = "button", title, onClick }) {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button;
