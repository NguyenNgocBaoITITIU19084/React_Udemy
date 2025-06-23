import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input onChange={handleInput} type="text" defaultValue={inputValue} />
        ) : (
          <span className="player-name">{inputValue}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
