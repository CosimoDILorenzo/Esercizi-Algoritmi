function ipotenusa(a,b) {
    let c = Math.sqrt((a*a) + (b*b));
}
console.log(ipotenusa(2,4));

function initialName(str) {
    let arr = str.split(' ').map(el => el[0]+'.').join('');
    return arr;
}
console.log(initialName("Tizio Caio"));

function istriangle(a,b,c) {
    let primo = (a > Math.abs(b - c) && (a < (b+c)));
    let secondo = (b > Math.abs(a - c) && (b < (a+c)));
    let terzo = (c > Math.abs(a - b) && (c < (a+b)));
    if(primo && secondo && terzo) return true;
}
console.log(istriangle(3,4,5));

function collatz(num) {
    let arr = [num];
    while(num > 1) {
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        arr.push(num);
    }
    return arr;
}

console.log(collatz(5));

function fibonacci(n) {
    let final = [1,1]; 
    for (let i = 0; i < n-2; i++) {
        let sum = final[i] + final[i+1];
        final.push(sum);
    }
    return final;
}
console.log(fibonacci(9));

function sumString(str) {
    return str.split('').filter(el => Number(el)).reduce((acc,val) => Number(acc) + Number(val));
}
console.log(sumString('Sono 1 stringa di 6 parole'));

function calcolaOre(num) {
    let ore = Math.floor(num / 60);
    let minuti = Math.floor(num % 60);
    return ore + ':' + minuti;
}
console.log(calcolaOre(3014));

function isVocals(str) {
    let reg = /[a,e,i,o,u]/g;
    return str.toLowerCase().match(reg).join('').length;
}
console.log(isVocals('ciao'))

function stringLength(str) {
    return str.split(' ').sort((a,b) => a.length - b.length).pop();
}

console.log(stringLength('sono una stringaa lunghissimaaaa'));

function numPrime(num) {
    if(num == 1) return false;
    if(num == 2) return true;
    for (let i = 2; i < num / 2; i++) {
        if(num % i == 0) return false;
    }
    return true;
}
console.log(numPrime(97));


function countString(str) {
    return str.split('').filter(el => el == 'x').length == str.split('').filter(el => el == 'y').length;
}
console.log(countString('xxyy'))
