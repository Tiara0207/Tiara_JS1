// if,else,nested-if
let nilai = 80;

if (nilai >= 90) {
  //if
  console.log("Nilai Tiara A");
} else if (nilai > 80) {
  //nested if
  console.log("Nilai Tiara B +");
} else if (nilai >= 8) {
  console.log("Nilai Tiara B");
} else if (nilai >= 75) {
  console.log("Nilai Tiara C +");
} else if (nilai >= 70) {
  console.log("Nilai Tiara C");
} else {
  //else
  console.log("Nilai Tiara D");
}

// switch case
let buah = "Anggur";

switch (buah) {
  case "Nanas":
    console.log("Ini buah Nanas");
    break;
  case "Apel":
    console.log("Ini buah Apel");
    break;
  case "Jeruk":
    console.log("Ini buah Jeruk");
    break;
  default:
    console.log("Ini buah yang tidak ada di list");
}

// for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// while, do while
let x = 1;

do {
  console.log("Nilai x: " + x);
  x++;
} while (x <= 5);

// function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(7, 15);
console.log("Hasil penambahan: " + hasil);