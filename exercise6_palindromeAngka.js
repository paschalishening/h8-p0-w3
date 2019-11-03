function angkaPalindrome(num) {
    while (true) {
        num++;
        var str = String(num);
        var strReverse = str.split('').reverse().join('');
        if (str === strReverse) {
            return Number(str);
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001