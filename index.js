function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
    
    const j = word.length - 1 - i
   
    if (word[i] !== word[j]) return false
}
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning to the middle
    check each ltter to the corresponding letter from the end
      if any ltters don't match, return false
  return true

  make a function that returns true if a word is a palindrome. 
  this means the first letter is the same as the last letter, second letter is the second to last letter,
  until the middle is reached, return true

*/

/*
  Add written explanation of your solution here
  This solution compares the first and last letters of a word by iterating through the word towards the middle from the start 
  and from the end. i starts at the begining of the word and j starts at the end of the word. i and j are compared to determine
  if they are equal. if they are equal the code returns true and if the are not equal the code returns false.  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("kayak"))
}

module.exports = isPalindrome;
