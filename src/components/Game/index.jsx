import { useState } from "react";

import { WinnerProvider } from "../../context/useWinner";
import { calculateWinner } from "../../utils/tictactoeutils";
import Header from "../Header";
import Results from "./Results";
import Status from "./Status";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleSquareClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const updatedBoard = [...board];
    updatedBoard[index] = xIsNext ? "X" : "O";
    setBoard(updatedBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <WinnerProvider squares={board}>
      <div className="game">
        <Header />
        <main>
          <div className="main-content">
            <Results />
            <Board onPlay={handleSquareClick} />
            <Status xIsNext={xIsNext} />
          </div>
        </main>
      </div>
    </WinnerProvider>
  );
};

export default Game;
