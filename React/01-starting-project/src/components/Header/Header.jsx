import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescription = ["Fundamental", "Core", "Crucial"];

function genRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

const randomNumber = genRandomNumber(2);

export default function Header() {
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[randomNumber]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}
