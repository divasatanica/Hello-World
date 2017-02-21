var shape = {
  type: 'triangle',
  getType: function () {
    return this.type;
  }
};
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
var s = new Triangle(6, 8, 10);     // 
Triangle.prototype = shape;         //用自定义对象覆盖了原有的原型对象，导致下面创建的t对象使用的是更新后的prototype对象。
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};
var t = new Triangle(3, 4, 5);      //
// Triangle.prototype.constructor = Triangle;
t.getType();
s.getType();



/* 
var shape = {
  type: 'triangle',
  getType: function () {
    return this.type;
  }
};
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
var s = new Triangle(6, 8, 10);
Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};
var t = new Triangle(3, 4, 5);
// Triangle.prototype.constructor = Triangle;
function getAllProperty(){
  var props = [];
  for(i in t){
    if(t.hasOwnPropertyOf(i)){
        */
