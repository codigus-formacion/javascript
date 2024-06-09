function showItems(array, hasToShow) {

  for(let i=0; i<array.length; i++){
    if(hasToShow(array[i])){
      console.log(array[i]);
    }
  }
}

function showNonZeros(numbers) {

  let isNonZero = function(num) {
      return num != 0;
  }

  showItems(numbers, isNonZero);

}

showNonZeros([0,2,4,0,5,0]);