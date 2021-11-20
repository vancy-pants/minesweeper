import { Cell } from "../types/Cell";

export const generateCells = (): Cell[][] => {
  return [
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
};
