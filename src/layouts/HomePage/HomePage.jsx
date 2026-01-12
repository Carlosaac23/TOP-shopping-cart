import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Product from '../../components/Product/Product';
import { fetchProducts } from '../../lib/fetch-products';
import './HomePage.css';

function useProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      }
    }

    fetchData();
  }, []);

  return { products, error };
}

export default function HomePage() {
  const { products, error } = useProducts();
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
