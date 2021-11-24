import { useState } from "react";
import Setup from "./components/Setup";
import PlayArea from "./components/PlayArea";
import "./App.css";

function App() {
  const [showSetup, setShowSetup] = useState(true);

  const handleStartGame = (
    numberOfRows: string,
    numberOfColumns: string,
    numberOfBombs: string
  ) => {
    console.log("numberOfRows :>> ", numberOfRows);
    console.log("numberOfColumns :>> ", numberOfColumns);
    console.log("numberOfBombs :>> ", numberOfBombs);

    setShowSetup(false);
  };

  return (
    <div className="App">
      {showSetup && <Setup onStartGame={handleStartGame} />}
      {!showSetup && <PlayArea />}
    </div>
  );
}

export default App;
