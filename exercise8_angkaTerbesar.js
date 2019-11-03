
function pasanganTerbesar(num){
var angkaPasangan = [];
var stringBaru = num.toString();

for (var i = 0; i < stringBaru.length - 1; i++) {
    var pair = stringBaru[i] + stringBaru[i + 1];
    var pairNumber = Number(pair);
    angkaPasangan.push(pairNumber);
}
angkaPasangan.sort();
var max = angkaPasangan[angkaPasangan.length - 1];
return max;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99