import React, { useState } from "react";
import "./App.scss";
import Card from "./birthDayCard.jsx";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <div className="frame">
        <div className="head">
          <h2 className="bod"> {people.length} Birthdays Today </h2>
        </div>
        <div className="birthday_list">
          <Card people={people} />
        </div>
        <div onClick={() => setPeople([])} className="button">
          {" "}
          Clear List{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
