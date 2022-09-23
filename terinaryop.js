let num = 7;
let result;


//if(7%2===0)
    //result = "even";
//else                            
    //result = "odd";

    //now we can use terinary simble
    result = num%2===0 ? "even" : "odd" ;
console.log(result);        

// SWITCH case
const day = 'sunday';
switch (day) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':  
    console.log('7 am');
    break;
  case 'thursday':
  case 'friday':
    console.log('9 am');
    break;
  case 'saturday':
    console.log('10 am');
    break;
  case 'sunday':
    console.log('11 am');
    break;
  default:
    console.log('wAKE UP');
}