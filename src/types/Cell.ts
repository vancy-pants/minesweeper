export type Cell = {
  adjacentBombsCount: number | null;
  isFlagged: boolean;
  isQuestion: boolean;
  isHidden: boolean;
};
