function showItems(array, hasToShow) {

  for(let i=0; i<array.length; i++){
    if(hasToShow(array[i])){
      console.log(array[i]);
    }
  }
}

function isEven(number){
  return number % 2 == 0;
}

showItems([1,2,3,4,5,6], isEven); 