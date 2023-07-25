import React, { useContext, useEffect, useState } from "react";
import { WinnerContext } from "../../context/useWinner";
import {
  updateData,
  getSessionStorageData,
  setSessionStorageData,
} from "../../utils/tictactoeutils";

const MarbleStat = ({ type }) => {
  const { winner, squares } = useContext(WinnerContext);
  const gameOver = !squares.includes(null);
  const [gameData, setGameData] = useState(() =>
    getSessionStorageData("playData")
  );
  const resultsMap = {
    X: "x_result",
    O: "o_result",
  };
  const results = resultsMap[type] || "";
  const section_content = type ? `${type} wins` : "Ties";
  const num = type ? gameData[`${type.toLowerCase()}_wins`] : gameData.ties;

  useEffect(() => {
    setSessionStorageData("playData", gameData);
  }, [gameData]);

  useEffect(() => {
    updateData(winner, gameOver, gameData, setGameData);
  }, [winner, gameOver]);

  return (
    <button className={results || null}>
      <span>{section_content}</span>
      <span>{num}</span>
    </button>
  );
};

const MemoizedMarbleStat = React.memo(MarbleStat);

const Results = () => {
  return (
    <div className="results">
      <MemoizedMarbleStat type="X" />
      <MemoizedMarbleStat />
      <MemoizedMarbleStat type="O" />
    </div>
  );
};

export default Results;
