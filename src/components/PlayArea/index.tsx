import { useState } from "react";
import CellComponent from "../Cell";
import { generateCells } from "../../lib/utils";
import { Cell } from "../../types/Cell";
import "./styles.css";

export default function PlayArea() {
  const [cellGrid, setCellGrid] = useState(() => generateCells());

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
    </div>
  );
}