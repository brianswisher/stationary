import React from "react";
import "./tags.css";

const Tags = props => {
  return (
    <span className="tags">
      {props.data &&
        props.data.map(t => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
    </span>
  );
};

export default Tags;
