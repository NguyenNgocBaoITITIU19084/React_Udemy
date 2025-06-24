import { useState } from "react";

import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import { Result } from "./components/Result/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(indentifier, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [indentifier]: +value,
      };
    });
  }

  const isValidInput = userInput.duration > 0;

  return (
    <main>
      <Header />
      <UserInput handleUserInput={handleUserInput} userInput={userInput} />

      {isValidInput ? (
        <Result userInput={userInput} />
      ) : (
        <p>Please, input duration greater than 0</p>
      )}
    </main>
  );
}

export default App;
