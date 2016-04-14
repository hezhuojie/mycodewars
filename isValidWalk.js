/**
 * Created by hezhojie on 2016/4/13.
 */
function isValidWalk(walk) {
  if(walk.length !== 10){
    return false;
  }
  var pos = {
    x:0,
    y:0
  };
  walk.forEach(function(value,index){
    switch(value){
      case 'n':
        pos.y++;
        break;
      case 'e':
        pos.x++;
        break;
      case 's':
        pos.y--;
        break;
      case 'w':
        pos.x--;
        break;
    }
  })
  return pos.x === 0 && pos.y === 0;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
