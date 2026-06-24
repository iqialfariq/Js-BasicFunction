// // di sebelah tulisan function merupakan deklarasi nama nya lalu yang di sebelah nama itu adalah parameter dari function tersebut
// function tambah(a, b) {
//   return a + b;
// }

// // console.log(tambah(10, 20));

// let nilaiPertama = prompt("Masukkan nilai pertama:");
// let nilaiKedua = prompt("Masukkan nilai kedua:");

// console.log(tambah(Number(nilaiPertama * 2), Number(nilaiKedua * 2)));

function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

console.log(tambah(10, 20, 30));
