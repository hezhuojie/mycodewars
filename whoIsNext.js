/**
 * Created by hezhojie on 2016/4/13.
 */
function whoIsNext(names,r){
  var n = 0,tmp,i, j,length = names.length;
  var colaArr = [],times = 0,exp = 0;
  while(n < 1000000000 && n < r){
    times = Math.pow(2,exp);
    for(j = 0;j<length;j++){
      for(i = 0; i<times;i++){
        colaArr.push(names[j]);
        n++;
      }
    }
    exp++;
  }
  return colaArr[r-1];
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951));