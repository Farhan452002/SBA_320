import React from "react";
import JeopardyBoard from "./components/JeopardyBoard";
import CatDisplay from "./components/CatDisplay";

const App = () => {
  return (
    <div className="container">
      <JeopardyBoard />
      <CatDisplay />
    </div>
  );
};

export default App;
