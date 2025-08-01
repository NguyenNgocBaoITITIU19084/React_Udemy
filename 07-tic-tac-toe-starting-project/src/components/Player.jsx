import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      // Save the new name when editing is done
      onNameChange(symbol, inputValue);
    }
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <li className={isActive ? "active" : null}>
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
