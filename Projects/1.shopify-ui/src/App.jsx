import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/navbar';
import Product from './components/Product/Product';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
};

export default App;
