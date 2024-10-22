let animal = 'Giraffe';

switch (animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Pig':
    console.log('Goes on the Ark');
    break;
  case 'Dinosaur':
  default:
    console.log('Does not go on the Ark');
}

// -----------

let array = [3, 4, 5, 6, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}