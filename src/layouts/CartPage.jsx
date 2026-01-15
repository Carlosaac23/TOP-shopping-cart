export default function CartPage() {
  return (
    <main className='mx-10 flex justify-between'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>My Shopping Cart</h1>
        <p>Lis of Products:</p>
      </div>
      <div>
        <h2>Summary</h2>
        <div>
          <p>Do you have promo code?</p>
          <input type='text' name='' id='' />
        </div>
        <div>
          <h3>Subtotal:</h3>
          <p>Shipping:</p>
          <p>Sales Tax:</p>
          <p>Estimated Total:</p>
          <button type='button'>Checkout</button>
        </div>
        <div>
          <p>
            Need help? Call us at{' '}
            <a className='underline' href='tel:+573007410161'>
              3007410161
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
