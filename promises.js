// using then()

const promise1 = new Promise((resolve, reject) => {
    resolve('bapatla eng college');
  });
  
  promise1.then((value) => {
    console.log(value);
    
  });
  
  // usin catch ()
  const promise2= new Promise((resolve, reject) => {
    throw 'it is an error';
  });
  
  promise2.catch((error) => {
    console.error(error);
  });
  
  