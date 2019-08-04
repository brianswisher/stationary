import React from "react";
import "./meta.css";

const Meta = props => {
  const { popularity, reliability } = props;

  return (
    <span className="meta">
      {parseFloat(popularity, 10) >= 3.5 && (
        <span className="badge popular">popular</span>
      )}
      {parseInt(reliability, 10) >= 75 && (
        <span className="badge reliable">reliable</span>
      )}
    </span>
  );
};

export default Meta;
