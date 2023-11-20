import { useEffect, useState } from "react";
import Cell from "./components/cell/cell";
import ChessBoard, { CellProps } from "./inside";
import * as List from "./assets/icons/list";
import "animate.css";
import cx from "classnames";
import cls from "./app.module.scss";

export type functionType = (
  x?: number,
  y?: number,
  figure?: keyof typeof List
) => void;

function App() {
  const [board, setBoard] = useState(ChessBoard);
  const [eats, setEats] = useState(0);

  useEffect(() => {
    setEats(numRookCaptures(board));
  }, [board]);

  const handleClearAll = () => {
    const newBoard: CellProps[][] = board.map((row) =>
      row.map((cell) => Object.assign({}, cell))
    );

    newBoard.forEach((row) => row.forEach((cell) => (cell.figure = "")));
    setBoard(newBoard);
  };
  const numRookCaptures: (boardd: CellProps[][]) => number = (boardd) => {
    const findRook: (board: CellProps[][]) => { x: number; y: number } = (
      board
    ) => {
      let x = 0;
      let y = 0;

      board.forEach((element, indexx) => {
        element.forEach((el, i) => {
          if (el.figure === "Rook") {
            y = indexx;
            x = i;
          }
        });
      });
      return { x, y };
    };

    const findEats: (board: CellProps[][], x: number, y: number) => number = (
      board,
      x,
      y
    ) => {
      let u = 0;
      let b = 0;
      let l = 0;
      let r = 0;

      for (let i = 0; i < x; i++) {
        l =
          board[y][i].figure === "Pawn"
            ? 1
            : board[y][i].figure === "Bishop"
            ? 0
            : l;
      }
      for (let i = board[y].length - 1; i > x; i--) {
        r =
          board[y][i].figure === "Pawn"
            ? 1
            : board[y][i].figure === "Bishop"
            ? 0
            : r;
      }
      for (let i = 0; i < y; i++) {
        u =
          board[i][x].figure === "Pawn"
            ? 1
            : board[i][x].figure === "Bishop"
            ? 0
            : u;
      }
      for (let i = 7; i > y; i--) {
        b =
          board[i][x].figure === "Pawn"
            ? 1
            : board[i][x].figure === "Bishop"
            ? 0
            : b;
      }

      return l + r + u + b;
    };

    const { x, y } = findRook(boardd);

    return findEats(boardd, x, y);
  };

  const setSelected: functionType = (x, y) => {
    // first  we need to deep copy our "board"
    const newBoard: CellProps[][] = board.map((row) =>
      row.map((cell) => Object.assign({}, cell))
    );

    newBoard.forEach((row, xIndex) =>
      row.forEach(
        (cell, yIndex) =>
          (cell.isSelected =
            xIndex === x && yIndex === y && cell.isSelected === false
              ? true
              : false)
      )
    );

    setBoard(newBoard);
  };

  const deleteFigure: (x: number, y: number) => void = (x, y) => {
    const newBoard: CellProps[][] = board.map((row) =>
      row.map((cell) => Object.assign({}, cell))
    );

    newBoard[x][y].figure = "";
    newBoard[x][y].isSelected = false;
    setBoard(newBoard);
  };

  const setFigure: (x: number, y: number, figure: keyof typeof List) => void = (
    x,
    y,
    figure
  ) => {
    const newBoard: CellProps[][] = board.map((row) =>
      row.map((cell) => Object.assign({}, cell))
    );
    if (figure === "Rook") {
      newBoard.forEach((row) =>
        row.forEach(
          (cell) => (cell.figure = cell.figure === "Rook" ? "" : cell.figure)
        )
      );
    }
    newBoard[x][y].figure = figure;
    newBoard[x][y].isSelected = false;
    setBoard(newBoard);
  };

  return (
    <>
      <div className={cls.navbar}>
        <a
          className={cls.github}
          target="_blank"
          href="https://github.com/ssabirovo/findEats"
        >
          <i className="fa-3x fa-brands fa-github"></i>
        </a>
      </div>
      <div className={cls.wrapper}>
        <div
          className={cx(cls.captures, "animate__animated  animate__fadeInLeft")}
        >
          <h1>
            Captures <br /> <p>{eats}</p>
          </h1>
        </div>
        <div
          className={cx(cls.board, "animate__animated  animate__fadeInDown")}
        >
          {board.map((row, xIndex) =>
            row.map(({ isSelected, figure, isBlack }, yIndex) => (
              <Cell
                key={yIndex}
                onClick={() => setSelected(xIndex, yIndex)}
                isSelected={isSelected}
                figure={`${figure}`}
                isBlack={isBlack}
                setFigure={setFigure}
                deleteFigure={deleteFigure}
                xIndex={xIndex}
                yIndex={yIndex}
              />
            ))
          )}
        </div>
        <div className={cx(cls.btn, "animate__animated  animate__fadeInRight")}>
          <button onClick={() => handleClearAll()}>Clear all</button>
        </div>
      </div>
      <div className={cls.info}>
        <div className={cls.title}>
          <p>Available Captures for</p>
          <p className={cls.rook}>Rook</p>
        </div>

        <a
          target="_blank"
          href="https://leetcode.com/problems/available-captures-for-rook/"
          className={cx(cls.link, "animate__animated  animate__fadeInLeft")}
        >
          This site is inspired by the Leetcode problem
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <p className={cx(cls.link, "animate__animated  animate__fadeInLeft")}>
          After solving the problem, I liked it. That's why I decided to create
          a cool UI for the site based on this problem.
        </p>
        <a
          target="_blank"
          href="https://www.figma.com/file/pafnC9FgO08tWzOFyzRMW2/Untitled?type=design&node-id=1%3A2&mode=design&t=LF16GOFOTAxt2MRS-1"
          className={cx(cls.link, "animate__animated  animate__fadeInLeft")}
        >
          Check out the Figma layout of the site.
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <p className={cx(cls.link, cls.footer)}>
          The technologies used in the creation of this site are: React,
          TypeScript and Sass.
        </p>
      </div>
    </>
  );
}

export default App;
