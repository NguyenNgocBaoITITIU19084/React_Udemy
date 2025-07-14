import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // tạo mảng copy do làm việc với array
    const updateItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];

      // update object => tạo deep copy object
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      // update item in array
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // some logic here
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // tạo mảng copy do làm việc với array
    const updateItems = [...state.items];

    const existingItem = state.items[existingCartItemIndex];

    if (existingItem.quantity === 1) {
      // remove
      updateItems.splice(existingCartItemIndex, 1);
    } else {
      // minutes 1
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updateItems[existingCartItemIndex] = updateItem;
    }

    return { ...state, items: updateItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
