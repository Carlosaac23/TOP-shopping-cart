import { Link } from 'react-router';

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link to='shop'>Shop</Link>
      <Link to='cart'>Cart</Link>
    </main>
  );
}
