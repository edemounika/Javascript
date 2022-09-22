let Bec = {
    name: "mounika",
    regno: 23,
    branch: "mca"
}
console. log(Bec);
//console. log(Bec['branch']);


//obect in object
let Mca = {
    name: "mounika",
    regno: 23,
    adress:{
        district:"baptla",
        pincode: 523456

    }

}
delete  Mca.adress;
console. log(Mca);
//console. log(Mca.adress);
//console. log(Mca.adress.pincode);
//using for loop
let position = {
    "top3": "India",
    "top2": "vijayawada",
    "top1": "buntumilli"
    };
  
  for (let code in position) {
    console.log(position); 
  }
  let user ={
    name: "jhon", 
     age: 22,
     study:Mca
   
  }
  delete user.name
console.log(user);
  