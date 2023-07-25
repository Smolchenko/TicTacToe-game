import { useContext } from "react";
import { WinnerContext } from "../../context/useWinner";

const Square = ({ value, onSquareClick, causedWin }) => {
  const { winner } = useContext(WinnerContext);
  const notAvailable = value || winner;
  const winnerClass =
    causedWin && winner ? `highlight-winner-${winner.toLowerCase()}` : "";

  const game_square_classes = ["game_square"];
  if (notAvailable) game_square_classes.push("not-available");
  if (winnerClass) game_square_classes.push(winnerClass);

  return (
    <button className={game_square_classes.join(" ")} onClick={onSquareClick}>
      <span>{value}</span>
    </button>
  );
};

export default Square;
