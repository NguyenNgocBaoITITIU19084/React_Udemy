import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredvalue] = useState(defaultValue);
  const [isEdit, setIsEdit] = useState(false);

  const enteredValueIsInvalid = validationFn(enteredValue);

  function handleEnteredValueBlur() {
    setIsEdit(true);
  }

  function handleEnteredValueChange(event) {
    setEnteredvalue(event.target.value);
    setIsEdit(false);
  }

  return {
    value: enteredValue,
    handleEnteredValueBlur,
    handleEnteredValueChange,
    hasError: isEdit && enteredValueIsInvalid,
  };
}
