/*

Find the Longest Word With the reduce() Method
For this solution, we will use the Array.prototype.reduce().

The reduce() method applies a function against 
an accumulator and each value of the array (from left-to-right) 
to reduce it to a single value.

.reduce() executes a callback function once for each element 
present in the array.

You can provide an initial value as the second argument to reduce, 
here we will add an empty string “”.

[].reduce(function(previousValue, currentValue) {...}, “”);

*/

function findLongestWordTouchMethod(str){
	var strSplit = str.split(' ')
	// Step 2. Use the reduce method
	var longestWord = strSplit.split(' ').reduce(function(longest, currentWord) {
		return currentWord.length > longest.length ? currentWord : longest
	}, ' ')
	return longestWord.length
}

findLongestWord("The quick brown fox jumped over the lazy dog");

 /* Reduce process
  currentWord      longest       currentWord.length     longest.length    if(currentWord.length > longest.length)?   var longestWord
  "The"             ""                  3                     0                              yes                          "The"
  "quick"           "The"               5                     3                              yes                         "quick"
  "brown"           "quick"             5                     5                              no                          "quick"
  "fox"             "quick"             3                     5                              no                          "quick"
  "jumped"          "quick"             6                     5                              yes                         "jumped"
  "over"            "jumped"            4                     6                              no                          "jumped"
  "the"             "jumped"            3                     6                              no                          "jumped"
  "lazy"            "jumped"            4                     6                              no                          "jumped"
  "dog"             "jumped"            3                     6                              no                          "jumped"
  */