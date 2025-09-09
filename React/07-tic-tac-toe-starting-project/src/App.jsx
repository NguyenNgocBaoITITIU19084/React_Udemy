import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./data/winning-combination";

const PLAYER = { X: "Player 1", O: "Player 2" };

// this is the initial game board state
// it is a 3x3 grid with all cells initialized to null
const INITIAL_GAME_BOARD = [
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

function deriveWinner(WINNING_COMBINATIONS, gameBoard, players) {
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
      winner = players[firstSquare];
    }
  }
  return winner;
}

function deriveGameBoard(initialGameBoard, gameTurns) {
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    if (gameBoard[row][col] === null) {
      gameBoard[row][col] = player;
    }
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYER);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  // gán các giá trị mà người chơi đã chọn vào gameBoard
  const gameBoard = deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);

  // checking condition for winning combinations
  // This is a placeholder for the logic to check if a player has won
  const winner = deriveWinner(WINNING_COMBINATIONS, gameBoard, players);

  // checking match is draw
  const isDraw = gameTurns.length === 9 && !winner;

  // function to handle the active player and update game turns
  // This function is called when a player selects a square on the game board
  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }

  // function to handle game restart
  function handleRestart() {
    setGameTurns([]);
  }

  // function to handle player name change
  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [playerSymbol]: newName,
    }));
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYER.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            name={PLAYER.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
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
