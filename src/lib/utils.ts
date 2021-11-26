import { Cell } from "../types/Cell";

const blankCell: Cell = {
  adjacentBombsCount: 0,
  isHidden: true,
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

const calculateAdjacentBombs = (bombCoordinates: string[], cells: Cell[][]) => {
  bombCoordinates.forEach((coordinates) => {
    const [rowNum, columnNum] = coordinates.split(",");

    let isRow0 = +rowNum === 0;
    let isColumn0 = +columnNum === 0;
    let isMaxRow = +rowNum === cells.length - 1;
    let isMaxColumn = +columnNum === cells[0].length - 1;

    // The previous row's cells
    if (!isRow0 && !isColumn0) {
      updateCell(
        +rowNum - 1,
        +columnNum - 1,
        {
          adjacentBombsCount:
            cells[+rowNum - 1][+columnNum - 1].adjacentBombsCount !== null
              ? cells[+rowNum - 1][+columnNum - 1].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }

    if (!isRow0) {
      updateCell(
        +rowNum - 1,
        +columnNum,
        {
          adjacentBombsCount:
            cells[+rowNum - 1][+columnNum].adjacentBombsCount !== null
              ? cells[+rowNum - 1][+columnNum].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }

    if (!isRow0 && !isMaxColumn) {
      updateCell(
        +rowNum - 1,
        +columnNum + 1,
        {
          adjacentBombsCount:
            cells[+rowNum - 1][+columnNum + 1].adjacentBombsCount !== null
              ? cells[+rowNum - 1][+columnNum + 1].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }

    // The same row's cells
    if (!isColumn0) {
      updateCell(
        +rowNum,
        +columnNum - 1,
        {
          adjacentBombsCount:
            cells[+rowNum][+columnNum - 1].adjacentBombsCount !== null
              ? cells[+rowNum][+columnNum - 1].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }

    if (!isMaxColumn) {
      updateCell(
        +rowNum,
        +columnNum + 1,
        {
          adjacentBombsCount:
            cells[+rowNum][+columnNum + 1].adjacentBombsCount !== null
              ? cells[+rowNum][+columnNum + 1].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }

    // The next row's cells
    if (!isMaxRow && !isColumn0) {
      updateCell(
        +rowNum + 1,
        +columnNum - 1,
        {
          adjacentBombsCount:
            cells[+rowNum + 1][+columnNum - 1].adjacentBombsCount !== null
              ? cells[+rowNum + 1][+columnNum - 1].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }

    if (!isMaxRow) {
      updateCell(
        +rowNum + 1,
        +columnNum,
        {
          adjacentBombsCount:
            cells[+rowNum + 1][+columnNum].adjacentBombsCount !== null
              ? cells[+rowNum + 1][+columnNum].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }

    if (!isMaxRow && !isMaxColumn) {
      updateCell(
        +rowNum + 1,
        +columnNum + 1,
        {
          adjacentBombsCount:
            cells[+rowNum + 1][+columnNum + 1].adjacentBombsCount !== null
              ? cells[+rowNum + 1][+columnNum + 1].adjacentBombsCount! + 1
              : null,
        },
        cells
      );
    }
  });
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

  calculateAdjacentBombs(bombCoordinates, cells);

  return cells;
};
