import { useState } from "react";

export default function GameBoard({ onActivePlayer, activePlayer, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelect(rowIndex, colIndex) {
  //   // This function will handle the logic when a player selects a cell
  //   setGameBoard((prevState) => {
  //     const updateState = [...prevState.map((innerArray) => [...innerArray])];
  //     updateState[rowIndex][colIndex] = activePlayer;
  //     return updateState;
  //   });

  //   onActivePlayer();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onActivePlayer(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
