showArr = function(arr){
  var i,j;
  for(i=0;i<arr.length;i++){
    console.log(arr[i].join(""));
  }
}
var spiralize = function(size) {
  // insert code here
  var arr = [];
  function showArr(arr){
    var i,j;
    for(i=0;i<arr.length;i++){
      console.log(arr[i].join(""));
    }
  }
  var isEven = size%2 ===0;
  for(var i = 0 ;i<size;i++){
    arr[i] = [];
    for(var j = 0; j<size;j++){
      arr[i][j] = 0;
    }
  }
  var topCol= 0,bottomCol=size-1,leftRow= 0,rightRow=size-1;
  while(true){
    for(i = leftRow;i<=rightRow;i++){
      arr[topCol][i] = 1;
    }
    if(topCol !== 0 ){
      leftRow +=2;
    }
    if(!isEven&&(topCol === bottomCol+2||leftRow === rightRow+2))
    {
      break;
    }
    if(isEven&&(topCol === bottomCol+1||leftRow === rightRow+1))
    {
      break;
    }
    for(i = topCol;i<=bottomCol;i++){
      arr[i][rightRow] = 1;
    }
    topCol +=2;
    if(!isEven&&(topCol === bottomCol+2||leftRow === rightRow+2))
    {
      break;
    }
    if(isEven&&(topCol === bottomCol+1||leftRow === rightRow+1))
    {
      break;
    }
    for(i = leftRow;i<=rightRow;i++){
      arr[bottomCol][i] = 1;
    }
    rightRow-=2;
    if(!isEven&&(topCol === bottomCol+2||leftRow === rightRow+2))
    {
      break;
    }
    if(isEven&&(topCol === bottomCol+1||leftRow === rightRow+1))
    {
      break;
    }
    for(i = topCol;i<=bottomCol;i++){
      arr[i][leftRow] = 1;
    }
    bottomCol-=2;
    if(!isEven&&(topCol === bottomCol+2||leftRow === rightRow+2))
    {
      break;
    }
    if(isEven&&(topCol === bottomCol+1||leftRow === rightRow+1))
    {
      break;
    }
  }
  return arr;
};


showArr(spiralize(5));
showArr(spiralize(10));

