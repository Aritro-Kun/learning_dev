// Creating a function that defines the slice function without the actual.
function cutoff (str, startIndex, endIndex) {
    let newstr = '';
    for (let i=0; i<str.length; i++) {
      if (i>=startIndex && i<endIndex) {
        newstr = newstr + str[i];
      }
    }
    return newstr;
  }
  let value = 'Aritro'
  console.log(value.slice(0, 4));
  console.log(cutoff(value, 0, 4));