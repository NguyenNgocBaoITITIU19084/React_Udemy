import { useContext } from "react";

import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgessContext from "../store/UserProgessContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgessCtx = useContext(UserProgessContext);

  const totalItem = cartCtx.items.reduce((totalItemInCart, item) => {
    return (totalItemInCart += item.quantity);
  }, 0);

  function handleOpenCart() {
    userProgessCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Food Order Logo" />
        <h1>Fooder Order.</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleOpenCart}>
          Cart ({totalItem})
        </Button>
      </nav>
    </header>
  );
}
