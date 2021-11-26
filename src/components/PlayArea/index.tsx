import CellComponent from "../Cell";
import { Cell } from "../../types/Cell";
import "./styles.css";

interface PlayAreaProps {
  cellGrid: Cell[][];
  setCellGrid: React.Dispatch<React.SetStateAction<Cell[][]>>;
  setShowSetup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlayArea({
  cellGrid,
  setCellGrid,
  setShowSetup,
}: PlayAreaProps) {
  const handleUpdateCell = (
    row: number,
    column: number,
    values: Partial<Cell>
  ) => {
    const updatedCell = { ...cellGrid[row][column], ...values };

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
    <div className="play-area">
      {cellGrid.map((rows, i) => {
        const rowOfCells = rows.map((cell, index) => (
          <CellComponent
            key={index}
            cell={cell}
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

      <button onClick={() => setShowSetup(true)}>Reset</button>
    </div>
  );
}
