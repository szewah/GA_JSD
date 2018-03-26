/*Find the Longest Word With the sort() Method
For this solution, we will use the Array.prototype.sort() method to sort the 
array by some ordering criterion and then return the length of the first 
element of this array.

The sort() method sorts the elements of an array in place and 
returns the array.

In Unicode, numbers come before upper case letters, which come 
before lower case letters. We need to sort the elements by some 
ordering criterion,

[].sort(function(firstElement, secondElement) { 
    return secondElement.length — firstElement.length; 
})

where the length of the second element is compared to the 
length of the first element in the array.
*/

function findLongestWordSortMethod (str) {
	var strSplit = str.split(' ')
	// Step 2. Sort the elements in the array
	var longestWord = strSplit.sort(function(a, b) {
		return b.length - a.length
	})
	/* Sorting process
    a           b            b.length     a.length     var longestWord
  "The"      "quick"            5            3         ["quick", "The"]
  "quick"    "brown"            5            5         ["quick", "brown", "The"]  
  "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
  "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
  "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
  "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
  "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
  "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
  */
   // Step 3. Return the length of the first element of the array
   return longestWord[0].length
   // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
   // longestWord[0]="jumped" => jumped".length => 6
}

findLongestWordSortMethod("The quick brown fox jumped over the lazy dog")