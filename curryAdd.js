function add(n){
  var value = 0;
  var fun = function(t){
    value += t;
    return fun;
  };
  fun.valueOf = function(){return value};
  value += n;
  return fun;
}
