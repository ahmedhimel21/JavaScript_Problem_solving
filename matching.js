const products = [
  { id: 1, name: 'xiaomi phone one night', price: 19000 },
  { id: 2, name: 'vivo', price: 120000 },
  { id: 1, name: 'nothing phone', price: 49000 }
]
function matching(products, search) {
  let unique = [];
  for (let i = 0; i<products.length; i++){
    const product = products[i];
    if(product.name.includes(search)){
      unique.push(product)
    }
  }
  return unique;
}
const searchInput = 'phone';
const matchingResult = matching(products,searchInput);
console.log(matchingResult);