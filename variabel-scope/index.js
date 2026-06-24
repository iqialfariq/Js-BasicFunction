// global scope / window scope
// var a = 1;
let a = 1;

function tes() {
  //   var b = 2;
  let a = 2;
  console.log(window.a);
}

tes();
