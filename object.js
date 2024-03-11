let mobile = {
  name: 'Vivo',
  model: 'V9 Youth',
  ram: '4gb',
  rom: '32gb',
  camera: '12mp'
}

// read object value
// method-1: Dot notation
const phoneName = mobile.name;
console.log(phoneName);
// method-2: bracket notation
const phoneModel = mobile['model'];
console.log(phoneModel);
// method-3: bracket notation with the help of variable
const proName = 'ram';
const phoneRam = mobile[proName];
console.log(phoneRam); 

// set object value
// method-1: dot notation
let newPhone = mobile.name = 'Samsung';
// method-2: bracket notation
let newModel = mobile['model'] = 'Galaxy s24 Ultra'
// method-3: bracket notation with the help of variable
let propertyName = 'rom';
let newRom = mobile[propertyName] = '256gb'
// console.log(mobile);

// read object property and value using loop
// read object keys/properties
const objectProperties = Object.keys(mobile);
// object properties
const objectValues = Object.values(mobile)
// console.log(objectProperties,objectValues);
for(let propertyName in mobile){
  let value = mobile[propertyName];
  console.log('ProName & value:', propertyName, value);
}