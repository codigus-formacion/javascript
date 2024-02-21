let animal = 'Jirafa';

switch (animal) {
  case 'Vaca':
  case 'Jirafa':
  case 'Cerdo':
    console.log('Sube al arca');
    break;
  case 'Dinosaurio':
  default:
    console.log('No sube');
}

// -----------

let array = [3, 4, 5, 6, 4, 5]

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}