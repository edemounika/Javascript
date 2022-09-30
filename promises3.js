//Promises
//async/await



/* const promise = fetch('https://jsonplaceholder.typicode.com/todos')

promise.then(function(res){

  return res.json()
  
}).then((res) => {
 console.log(res)
}) */

// async/await
// function should should be asynchronous
// How can we make function asynchronous?
// by using async keyword

/* async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const userdata = await res.json()
  console.log(userdata)
  
}
getTodos()
console.log("This Synchrnous") */

for(let i=0; i< 5;i++){
	setTimeout(() => {
	    console.log(i)
	  },100)
    
}

for(var i=0; i< 5;i++){
	setTimeout(() => {
	    console.log(i)
	  },100)
    
}