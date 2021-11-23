import { useState } from "react";
import "./styles.css";

export default function Setup() {
  const [numberOfCells, setNumberOfCells] = useState("9");
  const [numberOfBombs, setNumberOfBombs] = useState("3");

  return (
    <div className="setup-wrapper">
      <div>
        Number of Cells
        <input
          value={numberOfCells}
          onChange={(e) => setNumberOfCells(e.target.value)}
        />
      </div>
      <div>
        Number of Bombs
        <input
          value={numberOfBombs}
          onChange={(e) => setNumberOfBombs(e.target.value)}
        />
      </div>
    </div>
  );
}
