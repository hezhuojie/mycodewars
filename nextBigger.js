function nextBigger(n){
  //your code here
  var str = n+"";
  var strArr = str.split(""),arr=copyArr(strArr),result,min,toCompareArr = [],isSucce;
  for(var i = strArr.length-2;i>=0;i--){
    for(var j = i+1;j<=strArr.length-1;j++){
      swapIndex(arr,i,j);
      result = parseInt(arr.join(""));
      if(result>n){
        isSucce = true;
        var resultArr = arr.splice(i+1,arr.length-i-1);
        resultArr.sort(function(x,y){
          if(x==y){
            return 0;
          }
          else{
            return x>y;
          }
        });
        arr = arr.concat(resultArr);
        result = parseInt(arr.join(""));
        toCompareArr.push(result);
        arr = copyArr(strArr);
      }
      swapIndex(arr,i,j);
    }
    if(isSucce){
      break;
    }
  }
  if(toCompareArr.length===0){
    return -1;
  }
  else{
    var min = toCompareArr[0];
    toCompareArr.forEach(function(item,index){
      if(item<min){
        min = item;
      }
    });
    return min;
  }
}

function copyArr(source){
  var arr = []
  source.forEach(function(item,index){
    arr[index] = item;
  });
  return arr;
}

function swapIndex(arr,i,j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

nextBigger(1234567890);