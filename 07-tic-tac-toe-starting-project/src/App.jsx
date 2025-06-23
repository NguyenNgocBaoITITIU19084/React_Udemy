import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
      </ol>
      <GameBoard
        onActivePlayer={handleActivePlayer}
        activePlayer={activePlayer}
      />
    </div>
  );
}

export default App;
