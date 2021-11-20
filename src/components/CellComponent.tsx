import { SyntheticEvent } from "react";
import { Cell } from "../types/Cell";
import "./styles.css";

type CellProps = {
  cell: Cell;
  row: number;
  column: number;
  updateCell: (row: number, column: number, isFlagged: boolean) => void;
  onClick: (row: number, column: number, isBomb: boolean) => void;
};

export default function CellComponent({
  cell,
  row,
  column,
  updateCell,
  onClick,
}: CellProps) {
  const { isBomb, isFlagged, isHidden, adjacentBombsCount } = cell;

  const handleRightClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("right click!");
    updateCell(row, column, !isFlagged);
  };

  const handleClick = () => {
    console.log("normal click!");
    onClick(row, column, isBomb);
  };

  return (
    <div
      onContextMenu={(e) => handleRightClick(e)}
      onClick={handleClick}
      className={`cell ${isHidden ? "hidden" : "visible"}`}
    >
      {isFlagged && !isHidden ? "flag" : ""}
      {!isHidden && adjacentBombsCount}
    </div>
  );
}
