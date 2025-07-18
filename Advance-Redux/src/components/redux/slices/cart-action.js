import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('some thing wrong when sending the request!');
      }
      const data = await response.json();
      return data;
    }

    try {
      const cartData = await fetchData();
      console.log(cartData);

      dispatch(
        cartActions.replaceCart({
          items: cartData.data.items || [],
          totalItems: cartData.data.totalItems || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'fail to sending request',
          message: 'fail',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'sending request',
        message: 'sending....',
      })
    );

    async function sendCartRequest() {
      const response = await fetch('http://localhost:3001/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items,
          totalItems: cart.totalItems,
        }),
      });

      if (!response.ok) {
        throw new Error('some thing wrong when sending the request!');
      }
    }

    try {
      await sendCartRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'successfully sending the request',
          message: 'success....',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'fail to sending request',
          message: 'fail',
        })
      );
    }
  };
};
