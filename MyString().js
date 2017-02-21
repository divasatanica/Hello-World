function MyString(str) {
  var buf = [];
  for (i in str) {
    buf[i] = str[i];
  }
  this.length = buf.length;
  this.toString = function toString(){
    var result = '';
    for(i = 0;i < buf.length;i ++){
      result += buf[i];
    }
    return result;
  };
  this.valueOf = function valueOf(){
    return this.toString();
  }
  this.charAt = function charAt(idx){
    var strIndex = '';
    strIndex = buf[idx];
    return strIndex;
  }
  this.concat = function concat(tail){
    return str + tail;
  }
  this.slice = function slice(num1, num2){
    var stringSliced = '';
    if(num2 === -1){
      num2 = buf.length;
    }
    for(j = num1;j < num2;j ++){
      stringSliced += buf[j];
    }
    return stringSliced;
  }
  this.split = function split(dash){
    var arr = [];
    if(dash === ''){
      for(a = 0;a < buf.length;a ++){
        arr.push(buf[a]);
      }
    }
    else if(buf.indexOf(dash) === -1){
      arr.push(str);
    }
    else {
      var idx1 = buf.indexOf(dash);
      var indexArray = [];
      while(idx1 !== -1){
        indexArray.push(idx1);
        idx1 = buf.indexOf(dash, idx1 + 1);
      }
      arr.push(str.slice(0, indexArray[0]));
      for(q = 0;q < indexArray.length;q ++){
          arr.push(str.slice(indexArray[q] + 1, indexArray[q + 1]));
      }
          
    }
   return arr;
  }
  this.reverse = function reverse(){
    var bufArray = buf.reverse();
    var resultString = bufArray.join('');
    return resultString;
  }
}
var s = new MyString('i love you');
s.reverse();