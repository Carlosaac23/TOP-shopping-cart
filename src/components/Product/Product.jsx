import './Product.css';

export default function Product({ title, price, description }) {
  return (
    <div className='product__card'>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}
