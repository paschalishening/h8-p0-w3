var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input){
     input.splice(0, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21 / 05 / 1989", "Pria", "SMA Internasional Metro");
     console.log(input)
 }

var bulan = input[3].split("");
let date = bulan[0]+bulan[1];
let month = bulan[3] +bulan[4];
let year = bulan[6] + bulan[7] + bulan[8] + bulan[9]
let totaldate = [date, month, year];
console.log(bulan);
console.log(totaldate);
switch (month){
    case '05' : console.log('Mei'); break;
}

let gabung = totaldate.join("-");
console.log(gabung);

totaldate.sort(function(a,b){return b-a});
console.log(totaldate);

var nama = input[1].split('');
var joinNama= nama.join('');
var sliceNama= joinNama.slice(0,14);
console.log(sliceNama);

dataHandling2(input);
