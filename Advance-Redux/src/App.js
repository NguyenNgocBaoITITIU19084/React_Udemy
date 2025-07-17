import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isVisibleCart = useSelector((state) => state.ui.isVisibleCart);

  return (
    <Layout>
      {isVisibleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
