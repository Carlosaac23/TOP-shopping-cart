import { Link } from 'react-router';
import './Home.css';

export default function Home() {
  return (
    <main className='home'>
      <h1>Home</h1>
      <Link to='shop'>Shop</Link>
    </main>
  );
}
