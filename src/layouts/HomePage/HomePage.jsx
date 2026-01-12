import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Product from '../../components/Product/Product';
import { fetchProducts as products } from '../../lib/fetch-products';
import './HomePage.css';

function useProducts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await products();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      }
    }

    fetchProducts();
  }, []);

  return { data, error };
}

export default function HomePage() {
  const { data: products, error } = useProducts();
  console.log(products);

  if (error) {
    toast.error(error);
    return;
  }

  return (
    <main>
      <h1 className='products__title'>Products</h1>
      <div className='products__container'>
        {products?.map(({ id, title, price, description }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </div>
    </main>
  );
}
