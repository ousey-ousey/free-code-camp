import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/FetchUseeffect";
import Star from "./components/star-rating/Star";
import Accordion from "./components/accordion/Accordion";
import Colour from "./components/color-change/Colour";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* accordion component  */}
    {/* colour change component */}

    {/* star rating comonent */}
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Accordion />
      <Colour />
      <Star nomber={10} />

      <App />
    </div>
  </>
);
