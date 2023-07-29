import * as List from "./assets/icons/list";

export type CellProps = {
  isBlack: boolean;
  figure: keyof typeof List | "";
  isSelected: boolean;
};

const ChessBoard: CellProps[][] = [
  [
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
  ],
  [
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
  ],
  [
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
  ],
  [
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "Pawn", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
  ],
  [
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
  ],
  [
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "Rook", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
  ],
  [
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
  ],
  [
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
    { isSelected: false, figure: "", isBlack: false },
    { isSelected: false, figure: "", isBlack: true },
  ],
];

export default ChessBoard;
