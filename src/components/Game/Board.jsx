import { useContext } from "react";
import { WinnerContext } from "../../context/useWinner";

import Square from "./Square";

const Board = ({ onPlay }) => {
  const { winningCombination, squares } = useContext(WinnerContext);

  return (
    <div className="board">
      {Array.from({ length: 3 }, (_, i) => (
        <div className="board-row" key={i}>
          {Array.from({ length: 3 }, (_, j) => (
            <Square
              key={j}
              value={squares[i * 3 + j]}
              onSquareClick={() => onPlay(i * 3 + j)}
              causedWin={winningCombination?.includes(i * 3 + j)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
