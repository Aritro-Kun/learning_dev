//a simple code which allows to define a function, here we define a function which calculates the sum of n numbers.
//another function takes in a callback function and the argument of the initial function as arguments.
//furtherover, it uses .getTime to calculate the time taken to run the code in the local machine.
//the timeFunc() may seem to be a wrapover, actually it is.

function calculateSum (n) {
    let sum = 0;
    for (let i=0; i<=n; i++) {
      sum = sum + i;
    }
  }
  
  function timeFunc(callback, n){
    callback(n);
  }
  
  let beforeDate = new Date();
  let beforeTime = beforeDate.getTime();
  
  timeFunc(calculateSum, 1000000000);
  
  let afterDate = new Date();
  let afterTime = afterDate.getTime();
  
  let timeTaken = afterTime - beforeTime;
  console.log(timeTaken);
  