function isValidCoordinates(coordinates){
  var arr = coordinates.split(", ");
  if(arr.length !== 2){
    return false;
  }
  var str,num;
  for(var i = 0; i<arr.length ;i++){
    str = arr[i];
    if(str.indexOf(" ") !== -1){
      return false;
    }
    if(/^(-?\d+)(\.\d+)?$/.test(str) === false){
      return false;
    }
    num = parseFloat(str);
    if(isNaN(num)){
      return false;
    }
    if(i === 0 && (num>90 || num<-90)){
      return false;
    }
    else if(i === 1 && (num>180 || num<-180)){
      return false;
    }
  }
  return true
}