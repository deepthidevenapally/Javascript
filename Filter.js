const nums = [12,13,11,12,10,15];
var num = [];
num = nums.filter(ele => nums.indexOf(ele) === -1 ); 
console.log(num);