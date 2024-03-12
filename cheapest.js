const phones = [
  { name: 'vivo', camera: 12, price: 22000 },
  { name: 'samsung', camera: 12, price: 84000 },
  { name: 'iphone', camera: 12, price: 120000 },
  { name: 'xiaomi', camera: 12, price: 18500 },
  { name: 'one+', camera: 12, price: 26500 },
]

function cheapest(phones){
  let cheapest = phones[0];
  for(let i = 0; i <phones.length; i++){
    let phone = phones[i];
    if(phone.price < cheapest.price){
      cheapest = phone
    }
  }
  return cheapest;
}
const cheapestPhone = cheapest(phones);
console.log(cheapestPhone);