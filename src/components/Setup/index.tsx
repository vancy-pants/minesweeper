import { useState } from "react";
import "./styles.css";

export default function Setup() {
  const [numberOfRows, setNumberOfRows] = useState("3");
  const [numberOfColumns, setNumberOfColumns] = useState("3");
  const [numberOfBombs, setNumberOfBombs] = useState("3");

  return (
    <div className="setup-wrapper">
      <div>
        Number of Rows
        <br />
        <input
          value={numberOfRows}
          onChange={(e) => setNumberOfRows(e.target.value)}
        />
      </div>

      <br />

      <div>
        Number of Columns
        <br />
        <input
          value={numberOfColumns}
          onChange={(e) => setNumberOfColumns(e.target.value)}
        />
      </div>

      <br />

      <div>
        Number of Bombs
        <br />
        <input
          value={numberOfBombs}
          onChange={(e) => setNumberOfBombs(e.target.value)}
        />
      </div>
    </div>
  );
}
