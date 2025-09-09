import { useParams } from 'react-router-dom';
export default function ProductDetail() {
  const params = useParams();
  const productId = params.productId;
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>This is the detail page for a specific product in the SPA Demo.</p>
      <ul>
        <li>Detail of {productId}</li>
      </ul>
    </div>
  );
}
