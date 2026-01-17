function randomNumber(limitNumber) {
  return Math.floor(Math.random() * limitNumber + 1);
}

function fakeShippingCosts(subtotal) {
  if (subtotal >= 1000) return 0;
  if (subtotal < 1000 && subtotal > 700) return 15;
  if (subtotal < 700 && subtotal > 400) return 22;
  if (subtotal < 400 && subtotal > 150) return 27;
  if (subtotal < 150 && subtotal > 1) return 33;
  return 0;
}

function fakeSalesTaxes(subtotal) {
  return subtotal * 0.19;
}

export { randomNumber, fakeShippingCosts, fakeSalesTaxes };
