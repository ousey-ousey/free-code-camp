import React from "react";
import { useState } from "react";

export default function Colour() {
  const [typeofcolour, settypeofcolour] = useState("hex");
  const [colour, setColour] = useState("#000");
  function randomcolorutility(lenth) {
    return Math.floor(Math.random() * lenth.length);
  }
  function handlecreateHEXcolor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colourful = "#";
    for (let i = 0; i < 6; i++) {
      colourful += hex[randomcolorutility(hex)];
    }
    setColour(colourful);
  }
  function handlecreateRGBcolor() {
    let r = RGBrandomcolorutility(256);
    let g = RGBrandomcolorutility(256);
    let b = RGBrandomcolorutility(256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    setColour(rgb);
  }

  function RGBrandomcolorutility(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: colour,
        textAlign: "center",
      }}
    >
      <button onClick={() => settypeofcolour("hex") && handlecreateHEXcolor}>
        Create hex Colour
      </button>
      <button onClick={() => settypeofcolour("rgb") && handlecreateRGBcolor}>
        Create rgb Colour
      </button>
      <button
        onClick={
          typeofcolour === "hex" ? handlecreateHEXcolor : handlecreateRGBcolor
        }
      >
        Create random colour
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "3rem",
          fontWeight: 900,
        }}
      >
        <h2>colour is {colour}</h2>
      </div>
    </div>
  );
}
