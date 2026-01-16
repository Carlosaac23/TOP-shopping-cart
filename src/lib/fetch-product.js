export async function fetchProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error(`HTTP error: Status ${res.status}`);
  }
  const product = await res.json();
  return product;
}
