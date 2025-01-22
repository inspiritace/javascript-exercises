const sumAll = function(sumAll1, sumAll2) {
    if (!Number.isInteger(sumAll1) || !Number.isInteger(sumAll2)) return "ERROR";
    if (typeof sumAll1 !== 'number' || typeof sumAll2 !== 'number') {
        return 'ERROR';
    }
    if (sumAll1 < 0 || sumAll2 < 0) {
        return 'ERROR';
    }
    if (sumAll1 < sumAll2) {
        let temp = sumAll1;
        sumAll1 = sumAll2;
        sumAll2 = temp;
    }
    let sum = 0;
    for (let i = sumAll2; i <= sumAll1; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
