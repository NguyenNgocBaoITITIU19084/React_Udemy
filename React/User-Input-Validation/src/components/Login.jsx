import { useState } from "react";
import Input from "./Input";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsToOtherValue,
} from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleEnteredValueBlur: handleEmailBlur,
    handleEnteredValueChange: handleEmailChange,
    hasError: hasEmailError,
  } = useInput("", (value) => !isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleEnteredValueBlur: handlePasswordBlur,
    handleEnteredValueChange: handlePasswordChange,
    hasError: hasPasswordError,
  } = useInput("", (value) => isNotEmpty(value) && !hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted!", dataInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          error={hasEmailError ? "Email is not valid" : ""}
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          label="password"
          id="password"
          type="password"
          error={hasPasswordError ? "Password is not valid" : ""}
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button onClick={handleSubmit} className="button">
          Login
        </button>
      </p>
    </form>
  );
}
