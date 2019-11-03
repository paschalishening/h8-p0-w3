function hitungJumlahKata(kalimat) {
    var totalKalimat = 1;
    for (var i = totalKalimat; i <= kalimat.length; i++)
        if (kalimat[i] === " ") { 
            totalKalimat += 1;
        }
      return totalKalimat
    }

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
