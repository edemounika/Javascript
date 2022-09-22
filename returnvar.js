
//retrun function
function greet(){
    return "hello mounika"
}
let str = greet();
console.log(str);


// passing arg to function
function greet(user)
{
    return 'Hello ${user}!!'
}
let user = 2;
let num = greet(user);
console.log(num);