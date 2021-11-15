import "./styles/App.css";
import { Cell } from "./types/Cell";

function App() {
  const cells: Cell[][] = [
    [
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
    ],
    [
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
      {
        isBomb: true,
        adjacentBombsCount: 0,
        isHidden: true,
        isFlagged: false,
      },
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
    ],
    [
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
      {
        isBomb: false,
        adjacentBombsCount: 1,
        isHidden: true,
        isFlagged: false,
      },
    ],
  ];

  return (
    <div className="App">
      {cells.map((items) => {
        const rowItems = items.map((item) => (
          <div className="cell">{item.isBomb.toString()}</div>
        ));
        return <div className="row">{rowItems}</div>;
      })}
    </div>
  );
}

export default App;
