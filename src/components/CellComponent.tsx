import { SyntheticEvent } from "react";
import "./styles.css";

type CellProps = {
  isBomb: boolean;
  isFlagged: boolean;
  isHidden: boolean;
  row: number;
  column: number;
  updateCell: (row: number, column: number, isFlagged: boolean) => void;
};

export default function CellComponent({
  isBomb,
  isFlagged,
  isHidden,
  row,
  column,
  updateCell,
}: CellProps) {
  const handleRightClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("right click!");
    updateCell(row, column, !isFlagged);
  };

  return (
    <div onContextMenu={(e) => handleRightClick(e)} className="cell">
      {isFlagged ? "flag" : ""}
    </div>
  );
}
