import { log } from "../log.js";
import logoImg from "../assets/logo.png";
import { memo } from "react";

const Header = memo(function Header() {
  log("<Header /> rendered", 1);

  return (
    <header id="main-header">
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>React - Behind The Scenes</h1>
    </header>
  );
});
export default Header;
