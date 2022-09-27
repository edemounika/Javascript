//Adding methods to JavaScript constructor functions
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
let person = new Person("John", "Doe");
console.log(person.getFullName());

