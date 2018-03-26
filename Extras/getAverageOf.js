/*Given an object and a key, "getAverageOfElementsAtProperty" returns the 
average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.*/


function getAverageOfElementsAtProperty(obj, key){
	if(!(obj[key] instanceof Array) || obj[key].length === 0) {
		return 0
	} 
	else {
		var total = 0
		for(var i = 0; i < obj[key].length; i++) {
			total = total + obj[key][i]
		}
	return total / obj[key].length
	}
}


var obj = {
	key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2