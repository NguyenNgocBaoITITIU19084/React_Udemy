export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.player}-${turn.square.row}-${turn.square.col}`}>
          {`Player ${turn.player} selected square at row ${turn.square.row}, column ${turn.square.col}`}
        </li>
      ))}
    </ol>
  );
}
