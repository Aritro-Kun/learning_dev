function aritro () {
    let p = new Promise(function(resolve){
      setTimeout(function() {
        resolve('hi there');
      }, 3000);
    })
    return p;
  };
  
  async function main(){
    let value =await aritro(); //if await is not used here then we get as an output the promise and not the resolved value.
    console.log(value);
    console.log('hi there 2');
  }
  
  main();
  console.log('hello');