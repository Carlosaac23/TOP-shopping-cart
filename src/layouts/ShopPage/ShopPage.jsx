import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';
import Product from '../../components/Product/Product';
import { fetchProducts } from '../../lib/fetch-products';
import './ShopPage.css';

function useProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { products, error, isLoading };
}

export default function ShopPage() {
  const { products, error, isLoading } = useProducts();
  console.log(products);

  if (error) {
    toast.error(error);
    return;
  }

  return (
    <main>
      <h1 className='products__title'>Products</h1>
      {isLoading ? (
        <BeatLoader
          color='#fb923c'
          cssOverride={{
            textAlign: 'center',
          }}
        />
      ) : (
        <>
          <div className='products__container'>
            {products?.map(product => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
