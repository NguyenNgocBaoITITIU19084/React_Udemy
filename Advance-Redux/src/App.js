import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { uiActions } from './components/redux/slices/ui-slice';

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
    async function sendCartData() {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'sending request',
          message: 'sending....',
        })
      );

      const response = await fetch('http://localhost:3001/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('some thing wrong when sending the request!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'successfully sending the request',
          message: 'success....',
        })
      );
    }

    if (initial) {
      initial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'fail to sending request',
          message: 'fail',
        })
      );
    });
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
