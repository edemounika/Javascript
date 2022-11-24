//clases and inheritence

class human{
    constructor(){
        this.age=25;
    }
    PrintAge(){
        console.log(this.age);
    };
}

class person extends human{
    constructor(){
        super();
        this.name="Mouni";
        this.age=50;
       
    }
    printName(){
        console.log(this.name)
    }
}
const persons = new person();
persons.printName();
persons.PrintAge();
