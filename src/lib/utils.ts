import { Cell } from "../types/Cell";

export const generateCells = (): Cell[][] => {
  return [
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
};