//searching the  strings
//let re = /[A-Z]/;
//let str = 'hi There! How are you?';
//let index = str.search(re);

//console.log(index);
// indexOf() 
let str = 'finding substring in string';
let index = str.indexOf('str');

console.log(index); 

//trim() method to remove whitespace characters from both ends of a string.
let string= '  JS trim  ';
let result = string.trim();

console.log(result);
//split() method to split a string into an array of substrings.
let watch = 'JavaScript String split()';
let substrings = watch.split(' ');

console.log(substrings);
//substring() method to extract a substring from a string.
let name = 'JavaScript Substring';
let substring = name.substring(0,10);

console.log(substring);
//replace() method to replace a substring in a string with a new one.
let st = 'JS will, JS will rock you!';
//let newStr = st.replace('JS','JavaScript');

console.log(newStr);
//replaceAll() method that replaces all occurrences of a substring with a new string.
let stri = 'JS will, JS will, JS will rock you.';
let newStr = stri.replaceAll('JS','JavaScript');

console.log(newStr);

//toLowerCase();
const messa = 'Hi';
const newMess= messa.toLowerCase();

console.log(newMess);
//toUppercase()
const message = 'Hello';
const newMessage = message.toUpperCase();

console.log(newMessage);
