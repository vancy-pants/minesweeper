import { useState } from "react";
import Setup from "./components/Setup";
import PlayArea from "./components/PlayArea";
import { generateCells } from "./lib/utils";
import { Cell } from "./types/Cell";
import "./App.css";

function App() {
  const [showSetup, setShowSetup] = useState(true);
  const [cellGrid, setCellGrid] = useState<Cell[][]>([[]]);

  const handleStartGame = (
    numberOfRows: number,
    numberOfColumns: number,
    numberOfBombs: number
  ) => {
    const cells = generateCells(numberOfRows, numberOfColumns, numberOfBombs);

    setCellGrid(cells);
    setShowSetup(false);
  };

  return (
    <div className="App">
      {showSetup && <Setup onStartGame={handleStartGame} />}
      {!showSetup && <PlayArea cellGrid={cellGrid} setCellGrid={setCellGrid} />}
    </div>
  );
}

export default App;
