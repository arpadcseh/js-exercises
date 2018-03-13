/*
URL: https://www.freecodecamp.org/challenges/make-a-person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

-- Yeah I know, es6 classes would be nicer, but that couldn't meet with the exercise expectations
*/

var Person = function (firstAndLast: string): void {
    var [firstName, lastName] = firstAndLast.split(' ');

    this.getFullName = function () {
        return firstName + ' ' + lastName;
    };
    this.getFirstName = function () {
        return firstName;
    };
    this.getLastName = function () {
        return lastName;
    };
    this.setFullName = function (fullName: string) {
        [firstName, lastName] = fullName.split(' ');
    };
    this.setFirstName = function (fName: string) {
        firstName = fName;
        return firstName;
    };
    this.setLastName = function (lName: string) {
        lastName = lName;
        return lastName;
    };
};

export default Person;