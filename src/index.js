// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    const res = {};
    if (currency >= 50) {
        res.H = Math.floor(currency / 50);
        currency = currency % 50;
    }

    if (currency >= 25) {
        res.Q = 1;
        currency = currency - 25; 
    }

    if (currency >= 10) {
        res.D = Math.floor(currency / 10);
        currency = currency % 10;
    }

    if (currency >= 5) {
        res.N = 1;
        currency = currency - 5;
    }

    if (currency > 0) {
        res.P = currency;
    }

    return res;
}
