import { useRef } from "react";

export default function Question({
  answers,
  selectedAnsers,
  answerState,
  onSelected,
}) {
  const shuffedQuestion = useRef();

  if (!shuffedQuestion.current) {
    shuffedQuestion.current = [...answers];
    shuffedQuestion.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffedQuestion.current.map((answer) => {
        const isSelected = selectedAnsers === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelected(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
