import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../redux/slices/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalItems);

  function toggleCartUI() {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartUI}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
