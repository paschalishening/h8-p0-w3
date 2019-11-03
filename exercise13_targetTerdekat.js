function targetTerdekat(arr) {
    var strX = 0;  
    var StrO = 0; 
    var c = 0; 
    var arrX = []; 

    if (arr.indexOf('x') === - 1) { 
        return 0;
    }
    else { // jika tidak lakukan pengulangan 
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === 'x') { 
                strX = i;
                arrX.push(strX);
            }
            else if (arr[i] === 'o') {  
                StrO = i;
            }
            var output = [];
            for (var j = 0; j < arrX.length; j++) {
                c = Math.abs(StrO - arrX[j]);
                output.push(c);
                output.sort();
            }
        }
        return output[0];
    }
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2