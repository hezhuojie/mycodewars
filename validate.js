/**
 * Created by hezhojie on 2016/4/12.
 */

function validate(n){
  var arr = toIntArr(n);
  var isDouble = false, tmp,sum = 0;
  for(var i = arr.length-1 ; i>=0 ; i--){
    tmp = arr[i];
    if(isDouble){
      tmp = tmp*2;
      if(tmp > 9){
        tmp -= 9;
      }
      arr[i] = tmp;
    }
    sum +=tmp;
    isDouble = !isDouble;
  }
  return sum%10 === 0;
}

function toIntArr(n){
  var arr = [];
  var tmp;
  while(n>0){
    arr.unshift(n%10);
    n = parseInt(n/10);
  }
  return arr;
  //var out = 0;
  //for(var i = 0 ; i < arr.length ; i++){
  //  out += arr[i] * Math.pow(10,i);
  //}
  //return out;
}
