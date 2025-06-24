import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./data/winning-combination";

// this is the initial game board state
// it is a 3x3 grid with all cells initialized to null
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  // gán các giá trị mà người chơi đã chọn vào gameBoard
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    if (gameBoard[row][col] === null) {
      gameBoard[row][col] = player;
    }
  }

  // checking condition for winning combinations
  // This is a placeholder for the logic to check if a player has won
  let winner;

  for (const winningCombination of WINNING_COMBINATIONS) {
    const firstSquare =
      gameBoard[winningCombination[0].row][winningCombination[0].column];
    const sendSquare =
      gameBoard[winningCombination[1].row][winningCombination[1].column];
    const thirdSquare =
      gameBoard[winningCombination[2].row][winningCombination[2].column];

    if (
      firstSquare &&
      firstSquare === sendSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }

  function handleActivePlayer(rowIndex, colIndex) {
    // setActivePlayer((prevActivePlayer) =>
    //   prevActivePlayer === "X" ? "O" : "X"
    // );
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner && <p>you won, {winner}!</p>}
        <GameBoard
          onActivePlayer={handleActivePlayer}
          // activePlayer={currentPlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
