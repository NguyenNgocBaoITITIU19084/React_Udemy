import { useContext } from "react";

import Modal from "./UI/Modal";
import Button from "./UI/Button";

import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgessContext";
import { currencyFormatter } from "../utils/formatting";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgessCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce((totalPrice, item) => {
    return (totalPrice += item.price * item.quantity);
  }, 0);

  function handleCloseCartDialog() {
    userProgessCtx.hideCart();
  }

  function handleOpenCheckoutDialog() {
    userProgessCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgessCtx.progress === "cart"}
      onClose={
        userProgessCtx.progress === "cart" ? handleCloseCartDialog : null
      }
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onDelete={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCartDialog}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={() => userProgessCtx.showCheckout()}>
            Check-Out
          </Button>
        )}
      </p>
    </Modal>
  );
}
