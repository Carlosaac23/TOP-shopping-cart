import './Product.css';

import { CirclePlus } from 'lucide-react';

import { capitalize } from '../../utils';

export default function Product({
  image,
  title,
  category,
  price,
  rating: { count, rate },
}) {
  return (
    <div className='product__card'>
      <img className='product__card-image' src={image} alt='Product Image' />
      <div className='product__card-top'>
        <h2 className='product__card-title'>{title}</h2>
        <CirclePlus size={28} color='#fb923c' />
      </div>
      <p className='product__card-category'>{capitalize(category)}</p>
      <p className='product__card-price'>${price}</p>
      <div className='product__card-bottom'>
        <span className='product__card-rate'>Rating: {rate}</span>
        <span className='product__card-count'>({count})</span>
      </div>
    </div>
  );
}
