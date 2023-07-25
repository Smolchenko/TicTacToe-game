const Header = ({ onReset }) => {
  return (
    <header>
      <h1>TicTacToe</h1>
      <button onClick={onReset}>
        <span>New game</span>
      </button>
    </header>
  );
};

export default Header;
