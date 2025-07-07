import { useCallback, useRef, useState } from "react";
import FinishedImage from "../assets/quiz-complete.png";

import DUMMY_QUESTION from "../questions";
import Timer from "./Timer";

export default function Quiz() {
  const shuffledAnswers = useRef();
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const isFinished = activeQuestionIndex === DUMMY_QUESTION.length;

  const handleAwnserButton = useCallback(
    function handleAwnserButton(answer) {
      setAnswerState("answered");
      setUserAnswers((preAnswers) => {
        return [...preAnswers, answer];
      });

      setTimeout(() => {
        if (answer === DUMMY_QUESTION[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleAwnserButton(null),
    [handleAwnserButton]
  );

  if (isFinished) {
    return (
      <section id="summary">
        <img src={FinishedImage} alt="finished image" />
        <h2>Finished The Quizz</h2>
      </section>
    );
  }

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [
      ...DUMMY_QUESTION[activeQuestionIndex].answers,
    ].sort(() => Math.random() - 0.5);
  }

  return (
    <div id="quiz">
      <div id="question">
        <Timer
          key={activeQuestionIndex}
          timer={30000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{DUMMY_QUESTION[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
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
                <button
                  onClick={() => handleAwnserButton(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
