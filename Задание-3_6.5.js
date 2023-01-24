function outer(x) {
    return function(y) {
        return x + y;
    }
}

const sumFunction = outer(1);
const sum = sumFunction(2)
console.log(sum);
