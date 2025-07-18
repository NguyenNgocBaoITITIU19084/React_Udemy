import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  fetchCartData,
  sendCartData,
} from './components/redux/slices/cart-action';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let initial = true;

function App() {
  const dispatch = useDispatch();
  const isVisibleCart = useSelector((state) => state.ui.isVisibleCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Layout>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      {isVisibleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
