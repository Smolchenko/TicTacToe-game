const calculateWinner = (squares) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], winningCombos[i]];
    }
  }
};

const playDataDefault = {
  x_wins: 0,
  o_wins: 0,
  ties: 0,
};

const getSessionStorageData = (key) => {
  try {
    const data = JSON.parse(sessionStorage.getItem(key));
    return data || playDataDefault;
  } catch (error) {
    console.error(`Error parsing local storage data for ${key}:`, error);
    return playDataDefault;
  }
};

const setSessionStorageData = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const updateData = (winner, gameOver, gameData, setGameData) => {
  const current_round_winner = winner?.toLowerCase() || null;
  let updatedPlayData;

  if (current_round_winner) {
    updatedPlayData = {
      ...gameData,
      [`${current_round_winner}_wins`]:
        gameData[`${current_round_winner}_wins`] + 1,
    };
  } else {
    if (gameOver) {
      updatedPlayData = {
        ...gameData,
        ties: gameData.ties + 1,
      };
    }
  }

  if (updatedPlayData) {
    setSessionStorageData("playData", updatedPlayData);
    setGameData(updatedPlayData);
  }
};

export {
  updateData,
  calculateWinner,
  getSessionStorageData,
  setSessionStorageData,
};
