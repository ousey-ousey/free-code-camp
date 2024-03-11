import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./star.css";
export default function Star({ nomber = 5 }) {
  const [rating, setrating] = useState(0);
  const [hovered, sethovered] = useState(0);
  function handleClick(getcurrentIndex) {
    setrating(getcurrentIndex);
  }
  function onMouseMove(getcurrentIndex) {
    sethovered(getcurrentIndex);
  }
  function onMouseLeave(getcurrentIndex) {
    sethovered(rating);
  }
  return (
    <div>
      {[...Array(nomber)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hovered || rating) ? `active` : `inactive`}
            onClick={() => handleClick(index)}
            onMouseMove={() => onMouseMove(index)}
            onMouseLeave={() => onMouseLeave(index)}
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          />
        );
      })}
    </div>
  );
}
