const MarbleStat = ({ type }) => {
  const resultsMap = {
    X: "x_result",
    O: "o_result",
  };

  const results = resultsMap[type] || "";
  const section_content = type ? `${type} wins` : "ties";

  return (
    <button className={results}>
      <span>{section_content}</span>
      <span>num</span>
    </button>
  );
};

const Results = () => {
  return (
    <div className="results">
      <MarbleStat type="X" />
      <MarbleStat />
      <MarbleStat type="O" />
    </div>
  );
};

export default Results;
