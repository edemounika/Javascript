// array spread
set1 = [10,20,30,40,50]
set2 = [...set1,60,70,80]
console.log(set2);

//object spread
set1 = {
    name : "mouni",
    age : 25
}
set2 ={
    ...set1,
    email : "mouni@gmail.com"
}
console.log(set2);
