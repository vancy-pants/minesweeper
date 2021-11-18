import { useState } from "react";
import CellComponent from "./components/CellComponent";
import { generateCells } from "./lib/utils";
import "./styles/App.css";

function App() {
  // TODO: will have a way to reset the game, so we'll need the setCells eventually
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cellGrid, setCellGrid] = useState(() => generateCells());

  return (
    <div className="App">
      {cellGrid.map((rows, i) => {
        const rowOfCells = rows.map((cell, index) => (
          <CellComponent key={index} isBomb={cell.isBomb} />
        ));
        return (
          <div key={i} className="row">
            {rowOfCells}
          </div>
        );
      })}
    </div>
  );
}

export default App;
