export async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error(`HTTP error: Status ${res.status}`);
  }
  const productsData = await res.json();
  return productsData;
}
