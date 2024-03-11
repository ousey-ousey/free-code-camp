import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.memes);
      });
  }, []); // eslint-disable-line
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10",
            border: "solid 1px  black",
            width: "200px",
            margin: "5px",
          }}
        >
          <p>{item.name}</p>
          <img
            src={item.url}
            alt={item.name}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </div>
  );
}
