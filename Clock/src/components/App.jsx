import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [localTime, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  console.log(localTime);

  return (
    <div className="container">
      <h1>{localTime}</h1>
    </div>
  );
}

export default App;
