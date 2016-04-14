// Return the nth triangular number
function triangular( n ) {
  if(n<=0){
    return 0;
  }
  else{
    return (n*n+n)/2;
  }
}


function triangular(n){
  return n<=0?0:(n*n+n)/2;
}