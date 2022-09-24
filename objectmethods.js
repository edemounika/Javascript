/*let person = {
    firstName: 'mouni',
    lastName: 'ede'
};

person.greet = function () {
    console.log('Hello!');
}

person.greet();*/

/*let person = {
    firstName: 'nrp',
    lastName: 'ede'
};

function greet() {
    console.log('Hello, World!');
}

person.greet = greet;
person.greet();*/
//this 

let person = {
    firstName: 'bec',
    lastName: 'mca',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());