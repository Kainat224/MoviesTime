import React, { useState } from "react";
import Stars from "./Stars";
import { PropTypes } from "prop-types";

const starsContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};
const starsStyle = {
  display: "flex",
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  message = [],
  defaultRating = 0,
  // onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    // onSetRating(rating);
  }

  const starTextStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <div style={starsContainerStyle} className={className}>
      <div style={starsStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          // <span>S{i + 1}</span>
          <Stars
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={starTextStyle}>
        {message.length === maxRating
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  message: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

export default StarRating;
