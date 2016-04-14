/**
 * Created by hezhojie on 2016/4/12.
 */
function spinWords(str){
  //TODO Have fun :)
  var arr = str.split(" ");
  for(var i = 0 ; i < arr.length ; i++){
    arr[i] = reverse(arr[i]);
  }
  return arr.join("");
}
function reverse(str){
  if(str.length > 5){
    var arr = str.split("");
    arr.reverse();
    str = arr.join("");
  }
  return str;
}