import { useCallback, useState } from "react";

import QUESTION from "../questions";
import CompletedImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const isCompeleted = activeQuestionIndex === QUESTION.length;

  const handleSelectedQuestion = useCallback(function handleSelectedQuestion(
    selectedAnswer
  ) {
    setAnswerState("answered");
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
  },
  []);

  const handleSkipedQuestion = useCallback(
    () => handleSelectedQuestion(null),
    [handleSelectedQuestion]
  );

  if (isCompeleted) {
    return (
      <div id="summary">
        <img src={CompletedImage} alt="" />
        <h2>Compeleted Quiz</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTime={handleSkipedQuestion}
        />
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <Question
          answers={QUESTION[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelected={handleSelectedQuestion}
        />
      </div>
    </div>
  );
}
