import { useState } from "react";

export default function UserInput({ userInput, handleUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Input Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleUserInput("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleUserInput("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleUserInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleUserInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
