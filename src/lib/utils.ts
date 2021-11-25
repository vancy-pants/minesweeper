import { Cell } from "../types/Cell";

const getBombCoordinates = (rowMax: number, columnMax: number) => {
  const bombRow = Math.floor(Math.random() * rowMax);
  const bombColumn = Math.floor(Math.random() * columnMax);
  return `${bombRow},${bombColumn}`;
};

const exampleCells = [
  [
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
  ],
  [
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
    {
      adjacentBombsCount: null,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
  ],
  [
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
    {
      adjacentBombsCount: 1,
      isHidden: true,
      isFlagged: false,
      isQuestion: false,
    },
  ],
];

export const generateCells = (
  numberOfRows: number,
  numberOfColumns: number,
  numberOfBombs: number
): Cell[][] => {
  const bombCells: string[] = [];

  for (let i = 1; i <= numberOfBombs; i++) {
    let currentCoordinates = getBombCoordinates(numberOfRows, numberOfColumns);

    while (bombCells.includes(currentCoordinates)) {
      currentCoordinates = getBombCoordinates(numberOfRows, numberOfColumns);
    }

    bombCells.push(currentCoordinates);
  }
  console.log("bombCells :>> ", bombCells);

  return exampleCells;
};
