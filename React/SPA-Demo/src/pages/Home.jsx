import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page of the SPA Demo.</p>
      <p>
        go to the <Link to='/product'>Product Pages</Link>
      </p>
    </div>
  );
}
