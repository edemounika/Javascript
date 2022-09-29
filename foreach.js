//.forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.
let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){
    console.log('I want to eat '+foodItem);
});
//.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

let cost = [100,400,50,40,700];
let smallCost = cost.filter(function(costItem){
    return costItem < 200
});
console.log(smallCost);

//.map() executes the same code on every element in an array and returns a new array with the updated elements.
let num = [100,400,300,700];
let newNum = num.map(function(numItem){
    return numItem / 10;
});
console.log(newNum);