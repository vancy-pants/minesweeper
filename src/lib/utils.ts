import { Cell } from "../types/Cell";

const blankCell: Cell = {
  adjacentBombsCount: 0,
  isHidden: false,
  isFlagged: false,
  isQuestion: false,
};

const updateCell = (
  row: number,
  column: number,
  newValues: Partial<Cell>,
  cells: Cell[][]
) => {
  cells[row][column] = { ...cells[row][column], ...newValues };
};

const generateBlankCells = (
  numberOfRows: number,
  numberOfColumns: number
): Cell[][] => {
  const blankRow: Cell[] = [];

  for (let j = 1; j <= numberOfColumns; j++) {
    blankRow.push({ ...blankCell });
  }

  const cellGrid: Cell[][] = [];

  for (let k = 1; k <= numberOfRows; k++) {
    cellGrid.push([...blankRow]);
  }

  return cellGrid;
};

const getBombCoordinates = (rowMax: number, columnMax: number) => {
  const bombRow = Math.floor(Math.random() * rowMax);
  const bombColumn = Math.floor(Math.random() * columnMax);
  return `${bombRow},${bombColumn}`;
};

const addBombs = (
  numberOfRows: number,
  numberOfColumns: number,
  numberOfBombs: number,
  cells: Cell[][]
): string[] => {
  const bombCoordinates: string[] = [];

  for (let i = 1; i <= numberOfBombs; i++) {
    let currentCoordinates: string;

    do {
      currentCoordinates = getBombCoordinates(numberOfRows, numberOfColumns);
      // Don't allow duplicate coordinates
    } while (bombCoordinates.includes(currentCoordinates));

    bombCoordinates.push(currentCoordinates);
  }

  bombCoordinates.forEach((coordinates) => {
    const [rowNum, columnNum] = coordinates.split(",");

    updateCell(
      +rowNum,
      +columnNum,
      {
        adjacentBombsCount: null,
      },
      cells
    );
  });

  return bombCoordinates;
};

export const getCellGrid = (
  numberOfRows: number,
  numberOfColumns: number,
  numberOfBombs: number
): Cell[][] => {
  const cells = generateBlankCells(numberOfRows, numberOfColumns);

  const bombCoordinates = addBombs(
    numberOfRows,
    numberOfColumns,
    numberOfBombs,
    cells
  );

  return cells;
};
