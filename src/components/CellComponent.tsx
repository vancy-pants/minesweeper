import { SyntheticEvent } from "react";
import "./styles.css";

// TODO: will we want this instead?
// type CellProps = Cell
type CellProps = { isBomb: boolean };

// TODO: how to make the data so I can update it easily

export default function CellComponent({ isBomb }: CellProps) {
  const handleRightClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("right click!");
  };

  return (
    <div onContextMenu={(e) => handleRightClick(e)} className="cell">
      {isBomb.toString()}
    </div>
  );
}
