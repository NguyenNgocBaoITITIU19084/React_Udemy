import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="" />
      <h1>Quizz App</h1>
    </header>
  );
}
