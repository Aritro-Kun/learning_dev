/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    for (let i=0; i<=n; i++) {
        sum = sum + i;
    }
    return sum;
}

const beforeDate1 = new Date();
const beforeTime1= beforeDate1.getTime();

calculateTime(100);

const afterDate1 = new Date();
const afterTime1 = afterDate1.getTime();

let time1 = afterTime1 - beforeTime1;
console.log('Time taken to run the code is:' + time1);

const beforeDate2 = new Date();
const beforeTime2= beforeDate2.getTime();

calculateTime(100000);

const afterDate2 = new Date();
const afterTime2 = afterDate2.getTime();

let time2 = afterTime2 - beforeTime2;
console.log('Time taken to run the code is:' + time2);

const beforeDate3 = new Date();
const beforeTime3= beforeDate3.getTime();

calculateTime(1000000000);

const afterDate3 = new Date();
const afterTime3 = afterDate3.getTime();

let time3 = afterTime3 - beforeTime3;
console.log('Time taken to run the code is:' + time3);