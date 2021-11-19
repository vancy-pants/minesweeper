import { useState } from "react";
import CellComponent from "./components/CellComponent";
import { generateCells } from "./lib/utils";
import "./styles/App.css";

function App() {
  const [cellGrid, setCellGrid] = useState(() => generateCells());

  const handleUpdateCell = (
    row: number,
    column: number,
    isFlagged: boolean
  ) => {
    const updatedCell = { ...cellGrid[row][column], isFlagged };

    const updatedRow = cellGrid[row].map((currentCell, columnNum) => {
      if (columnNum === column) {
        return updatedCell;
      }
      return currentCell;
    });

    const updatedGrid = cellGrid.map((currentRow, rowNum) => {
      if (rowNum === row) {
        return updatedRow;
      }
      return currentRow;
    });

    setCellGrid(updatedGrid);
  };

  return (
    <div className="App">
      {cellGrid.map((rows, i) => {
        const rowOfCells = rows.map((cell, index) => (
          <CellComponent
            key={index}
            isBomb={cell.isBomb}
            isFlagged={cell.isFlagged}
            isHidden={cell.isHidden}
            row={i}
            column={index}
            updateCell={handleUpdateCell}
          />
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
