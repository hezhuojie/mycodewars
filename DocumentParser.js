/**
 * Created by hezhojie on 2016/4/20.
 */

function DocumentParser(reader)
{
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function()
{
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function()
{
  var str  = null,preCh=null,arr;
  while((str = this.reader.getChunk())!==""){
    arr = str.split("");
    for(var i = 0;i<arr.length;i++){
      var char = arr[i];
      if(char==='\n'){
        this.lineCount++;
        this.charCount--;
      }
      else if(char!==' '&&(preCh===" "||preCh==="\n"||preCh===null)){
        this.wordCount++;
      }

      this.charCount++;
      preCh = char;
    }
  }
  this.lineCount++;
};
