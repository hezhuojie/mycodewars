var result ;
snail = function(array) {
  // enjoy
  result = [];
  while(true){
    if(array.length !== 0 && array[0].length !== 0 ){
      shiftLine(array);
    }
    if(array.length !== 0 && array[0].length !== 0 ){
      removeRightCol(array);
    }
    if(array.length !== 0 && array[0].length !== 0 ){
      popLine(array);
    }
    if(array.length !== 0 && array[0].length !== 0 ){
      removeLeftCol(array);
    }
    if(array.length === 0 || array[0].length === 0 ){
      return result;
    }
  }
};

function shiftLine(array){
  result = result.concat(array.shift());
}

function popLine(array){
  result = result.concat(array.pop().reverse());
}

function removeRightCol(array){
  var index = array[0].length-1;
  for(var i in array){
    result.push(array[i].pop());
  }
}

function removeLeftCol(array){
  var index = 0;
  for(var i = array.length-1 ; i>0; i--){
    result.push(array[i].shift());
  }
}

snail( [[1,2,3],
  [4,5,6],
  [7,8,9]]);
console.log(result);
snail( [[1,2,3],
  [8,9,4],
  [7,6,5]]);
console.log(result);
snail( [[1,2,3,1],
  [4,5,6,4],
  [7,8,9,7],
  [7,8,9,7]]);
console.log(result);
