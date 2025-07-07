import QuizzLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizzLogo} />
      <h1>React Quizz App</h1>
    </header>
  );
}
