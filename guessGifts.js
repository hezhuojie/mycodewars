function guessGifts(wishlist,presents){
  var wish,gift,j;
  var result = [];
  for(var i = 0 ; i<wishlist.length; i++){
    wish = wishlist[i];
    for(j = 0 ; j<presents.length; j++){
      gift = presents[j];
      if(gift.size === wish.size
        &&gift.clatters === wish.clatters
        &&gift.weight === wish.weight){
        result.push(wish.name)
      }
    }
  }
  return result;
}

var result = guessGifts([
  {name: "mini puzzle", size: "small", clatters: "yes", weight: "light"},
  {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"},
  {name: "card game", size: "small", clatters: "no", weight: "light"}
],[
  {size: "medium", clatters: "a bit", weight: "medium"},
  {size: "small", clatters: "yes", weight: "light"}
]);

console.log(result);