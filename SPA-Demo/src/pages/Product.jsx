import { Link } from 'react-router-dom';
export default function Product() {
  return (
    <div>
      <h1>Product Page</h1>
      <p>This is the product page of the SPA Demo.</p>
      <ul>
        <li>
          <Link to='/product/1'>product-1</Link>
        </li>
        <li>
          <Link to='/product/2'>product-2</Link>
        </li>{' '}
        <li>
          <Link to='/product/3'>product-3</Link>
        </li>{' '}
        <li>
          <Link to='/product/4'>product-4</Link>
        </li>
      </ul>
    </div>
  );
}
