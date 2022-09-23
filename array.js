// length property
let colors = ['red', 'green', 'blue'];
console.log(colors.length);

colors.push('yellow');
console.log(colors.length);

colors = [];
console.log(colors.length)


//push()  adds one or more elements
 
let numbers = [10, 20, 30];

let length = numbers.push(40);

console.log(numbers);
// pop() removes the last element from an array and returns the removed element. 
const nu = [10, 20, 30];
const last = nu.pop();

console.log(last); // 30
console.log(nu.length); // 2

//unshift() method to add one or more elements to the beginning of an array.

let fruits = ["papaya", "Apple"];

//let length = numbers.unshift("star");

console.log({ length });
console.log({ numbers });

//shift() method to remove the first element from an array.
const num = [10, 20, 30];
let number = numbers.shift();

console.log({ number });
console.log({ numbers });
console.log({ length: numbers.length });

//splice() method to delete existing elements, insert new elements, and replace elements in an array.
let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);
console.log(scores); 
console.log(deletedScores); 

//slice() method to extract a substring from a string.
const str = 'Hello';
const substr = str.slice(3);

console.log({ substr });

// - values
const st = 'Hello';
const sub = st.slice(-3);

console.log({ sub});
//end
const m = 'Hello';
const n = m.slice(0, 2);

console.log({ n });
// Finding elements
//indexOf() method returns the index of the first occurrence of an element in an array
let chars = ['A', 'B', 'A', 'C', 'B'];
chars.indexOf('B');

//concat  we will print the combination of two arrays
var arr1=["C","C++","Python"];  
var arr2=["Java","JavaScript","Android"];  
var result=arr1.concat(arr2);  
console.log(result); 
// join=array join() method combines all the elements of an array into a string and return a new string.
var arr=["AngularJs","Node.js","JQuery"]  
var result=arr.join()  
console.log(result); 
