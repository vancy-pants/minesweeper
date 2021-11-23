import { SyntheticEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faBomb } from "@fortawesome/free-solid-svg-icons";
import { Cell } from "../types/Cell";
import "./styles.css";

type CellProps = {
  cell: Cell;
  row: number;
  column: number;
  updateCell: (row: number, column: number, values: Partial<Cell>) => void;
};

export default function CellComponent({
  cell,
  row,
  column,
  updateCell,
}: CellProps) {
  const { isFlagged, isHidden, adjacentBombsCount } = cell;

  const handleClick = () => {
    console.log("normal click!");
    if (adjacentBombsCount === null) {
      alert("Game over!");
    }
    updateCell(row, column, { isHidden: false });
  };

  const handleRightClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("right click!");
    updateCell(row, column, { isFlagged: !isFlagged });
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleRightClick}
      className={`cell ${isHidden ? "hidden" : "visible"}`}
    >
      {isFlagged && isHidden && <FontAwesomeIcon icon={faFlag} />}
      {!isHidden && !!adjacentBombsCount && adjacentBombsCount}
      {!isHidden && adjacentBombsCount === null && (
        <FontAwesomeIcon icon={faBomb} />
      )}
    </div>
  );
}
