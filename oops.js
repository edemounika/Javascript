// Encapsulation

const book = function(heaven, jhon) {
    let title = heaven; 
    let author = jhon; 
    
    return {
       summary : function() { 
         console.log(`${title} written by ${author}.`);
       } 
    }
 }
 const book1 = new book('Hippie', 'Paulo Coelho');
 book1.summary();

//abstraction
class ImplementAbstraction {
    // method to set values of internal members
    set(x, y) {
      this.a = x;
      this.b = y;
    }
  
    display() {
      console.log(`a = ${this.a}`);
      console.log(`b = ${this.b}`);
    }
  }
  
  const obj = new ImplementAbstraction();
  obj.set(10, 20);
  obj.display();