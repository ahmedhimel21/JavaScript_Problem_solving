const shoppingCart = [
  { name: 'shoe', price: 1200, quantity: 2 },
  { name: 'shirt', price: 2200, quantity: 3 },
  { name: 'pant', price: 3700, quantity: 2 },
  { name: 'belt', price: 600, quantity: 2 },
];
function cartPrice(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const totalPrice = product.price * product.quantity;
    sum = sum + totalPrice;
  }
  return sum;
}
const totalCost = cartPrice(shoppingCart);
console.log('Total Cost:', totalCost);
