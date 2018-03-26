/*Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns a new 
array with only thr even-lengthed numbers from the original array.*/

function filterEvenLengthWords (words) {
	newArray = []
	for (var i = 0; i<words.length; i++) {
		if (words[i].length % 2 === 0) {
			newArray.push(words[i])
		}
	}
	return newArray
}


var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']