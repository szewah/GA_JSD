/*Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty" returns an 
array containing all the elements of the array located at the given key that 
are equal to ten.

Notes:

* If the array is empty, it should return an empty array.
* If the array contains no elements equal to 10, it should return an empty 
array.
* If the property at the given key is not an array, it should return an empty
 array.
* If there is no property at the key, it should return an empty array.*/

function getElementsThatEqual10AtProperty(obj, key){
	//the function returns a new array with keys that equal to ten
	var newArray = []
	//cycle through the elements
	for(var i = 0; i < obj[key].length; i++) {
	//if elements is equal to ten 
	if (obj[key][i] === 10) {
		newArray.push(obj[key][i])
		}
	}
/** If the array is empty, it should return an empty array.
* If the array contains no elements equal to 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.*/
	return newArray
}

var obj = {
  key: [1000, 10, 50, 10]
};

var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);


  // // your code here
  // var newArr = [];
  // //cycle through elements of the array at obj[key]:
  // for(var i = 0; i< obj[key].length; i++){
  //   //if an element is equal to 10:
  //   if(obj[key][i] === 10){
  //     //push(add) to our newArr array:
  //     newArr.push(obj[key][i]);
  //   }
  // }
  // return newArr;