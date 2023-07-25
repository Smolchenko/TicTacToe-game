import { useContext } from "react";
import { WinnerContext } from "../../context/useWinner";

const Status = ({ xIsNext }) => {
  const { winner, squares } = useContext(WinnerContext);

  const status = winner
    ? `The winner is ${winner} !`
    : squares.includes(null)
    ? `Pending player ${xIsNext ? "X" : "O"}`
    : "Tie! Game is Over";

  return <div className="status">{status}</div>;
};

export default Status;
