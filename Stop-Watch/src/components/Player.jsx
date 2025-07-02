import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef("");
  const [enterName, setEnterName] = useState(false);

  function handleClicked() {
    setEnterName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClicked}>Set Name</button>
      </p>
    </section>
  );
}
