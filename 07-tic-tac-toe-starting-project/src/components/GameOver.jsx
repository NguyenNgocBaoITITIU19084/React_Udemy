export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>{winner ? `Congratulations ${winner}!` : "It's a draw!"}</h2>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
}
