import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_Product = [
  {
    id: 1,
    price: 7,
    title: 'my product testing',
    description: 'some text here...',
  },
  {
    id: 2,
    price: 7,
    title: 'my product testing',
    description: 'some text here...',
  },
  {
    id: 3,
    price: 7,
    title: 'my product testing',
    description: 'some text here...',
  },
  {
    id: 4,
    price: 7,
    title: 'my product testing',
    description: 'some text here...',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_Product.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
