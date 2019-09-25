import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  const [plant, setplant] = useState();

  useEffect(() => {
    axios
      .get("https://data.sfgov.org/resource/vmnk-skih.json")
      .then(({ data }) => setplant(data));
  });

  return plant ? (
    <div>
      {plant.map((record, i) => {
        return (
          <div
            key={i}
            style={{
              border: "1px black solid",
              borderRadius: "10px",
              margin: "10px",
              padding: "10px"
            }}
          >
            <p><strong>Plant Name:</strong> {plant[i].common_name}</p>
            <p><strong>Plant Type:</strong> {plant[i].plant_type}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};


export default App;
