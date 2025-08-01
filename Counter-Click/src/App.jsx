import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import Input from "./components/Counter/Input.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleChosen(input) {
    setChosenCount(input);
  }

  return (
    <>
      <Header />
      <main>
        <Input onChosen={handleChosen} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
