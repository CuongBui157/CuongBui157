// 1. Function name
function sum(a, b) {
  return a + b;
}
console.log("function name", sum(10, 20));

//2. function expression
const sum2 = function (a, b) {
  return a + b;
};
console.log("function expression", sum2(10, 20));

//3. function arrow
const sum3 = (a, b) => a + b;
console.log("arrow expression", sum3(10, 30));

//4. IIFE function
(function (a, b) {
  console.log(a + b);
})(10, 20);


//Khai báo hàm thì phải dùng động từ và phải là tiếng anh

function showProduct(){
    //checking
    //processing
    //return
}
