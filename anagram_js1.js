/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  cleanstr1 = str1.replace(/\s/g,'').toLowerCase();
  cleanstr2 = str2.replace(/\s/g,'').toLowerCase();

  array1 = cleanstr1.split('');
  array2 = cleanstr2.split('');

  sortedarray1 = array1.sort();
  sortedarray2 = array2.sort();

  return sortedarray1.join('') == sortedarray2.join('');
}

module.exports = isAnagram;
