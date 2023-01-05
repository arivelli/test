
function checkChange(coins) {

    coins.sort(function (a, b) { return a - b });


    for (let min = 1; min < 1000; min++) {
        let amount = 0;

        for (let i = 0; i < coins.length; i++) {
            amount += coins[i];
            if (min == amount) {
                break
            }
            if (min > amount) {
                return min;
            }
        };
    }
    return min;
}

function squareNumbers(numbers) {
    let res = [];
    for (i = 0; i < numbers.length; i++) {
        res[i] = numbers[i] * numbers[i];
    }
    return res.sort(function (a, b) { return a - b });
}