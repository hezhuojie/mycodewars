var recoverSecret = function(triplets) {
  formMap(triplets);
  var head = findHead();
  return findLongestPath(head);
};

function findLongestPath(node){
  var maxNextStep = 0,maxKey;
  for(var i in node.next){
    findLongestPath(node.next[i]);
    if(node.next[i].step > maxNextStep){
      maxNextStep = node.next[i].step;
      maxKey = i;
    }
  }
  if(maxNextStep === 0 && !maxKey){
    node.step = 1;
    node.nextStr = node.letter;
  }
  else{
    node.step = maxNextStep+1;
    node.nextStr = node.letter+node.next[maxKey].nextStr;
  }
  return node.nextStr;
}

function Node(letter){
  this.next = {};
  this.letter = letter;
}
Node.prototype.addNext = function(node){
  if(!this.next[node.letter]){
    this.next[node.letter] = node;
    node.hasParent = true;
  }
  return this;
};
var nodeMap = {};
function formMap(triplets){
  nodeMap = {};
  var j= 0,letter,node,pre,head;
  for(var i = 0 ; i<triplets.length;i++){
    for(j=0;j<triplets[i].length;j++){
      letter = triplets[i][j];
      if(!nodeMap[letter]){
        node = new Node(letter);
        nodeMap[letter] = node;
      }
      else{
        node = nodeMap[letter];
      }
      if(j!==0) {
        pre.addNext(node);
      }
      pre = node;
    }
  }
}

function findHead(){
  for(var key in nodeMap){
    if(!nodeMap[key].hasParent){
      return nodeMap[key];
    }
  }
}

console.log(recoverSecret([
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]));