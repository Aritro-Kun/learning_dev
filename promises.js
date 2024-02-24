function aritro() {
  let p = new Promise (function(resolve) {
    setTimeout(function(){
      resolve('Aritro');
    }, 1000);
  })
  return p;
}


function callback(data) {
  console.log(data);
};

var a = aritro();
a.then(callback);

var b = aritro(); //here the promise does the resolve and the anonymous function returns the promise with the resolve.
b.then(function() {
  console.log(b);
})
