import React from "react";
import data from "./data";
import { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  const [active, setActive] = useState(null);
  function handleselectid(getid) {
    setActive(getid === active ? null : getid);
  }
  const [enablemultiselection, setnablemultiselection] = useState(false);
  const [multiselection, setmultiselection] = useState([]);
  function handlemultiselection(getid) {
    let multy = [...multiselection];
    let findindexofcurrentid = multy.indexOf(getid);
    if (findindexofcurrentid === -1)
      //add the id to array
      multy.push(getid);
    else multy.splice(findindexofcurrentid, 1);
    setmultiselection(multy);
  }
  return (
    <div className="warrper">
      <button onClick={() => setnablemultiselection(!enablemultiselection)}>
        Enable multi-selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((datashow) => (
            <div key={datashow.id} className="card">
              <div
                className="title"
                onClick={
                  enablemultiselection
                    ? () => handlemultiselection(datashow.id)
                    : () => handleselectid(datashow.id)
                }
              >
                <h3>{datashow.question}</h3>
                <span>+</span>
              </div>
              <div className="content">
                {active === datashow.id ||
                multiselection.indexOf(datashow.id) !== -1 ? (
                  <p>{datashow.answer}</p>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <p>No Data Found!</p>
        )}
      </div>
    </div>
  );
}
