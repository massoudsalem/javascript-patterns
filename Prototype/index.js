//Share properties among many objects of the same type

/* 
Tradeoffs (+ Cons) (- Pros) of Prototypes:
(+)Memory efficient: The prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used.
(+)Dynamic: Prototypes allow us to add or remove properties and methods at runtime, making it easy to modify the behavior of objects on the fly.
(-)Readability: When a class has been extended many times, it can be difficult to know where certain properties come from.
(-)Performance: Accessing properties and methods through the prototype chain can be slower than accessing them directly on the object itself, especially for deeply nested objects.

*/

class User {
  constructor(firstName, lastName, email){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.fullName = `${firstName} ${lastName}`;
  }
  checkLastOnline(){
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }
  sendEmail(){
    console.log(`Email sent to ${this.email}`);
  }
  delete(){
    console.log('User removed');
  }  
}
const user = new User('John', 'Doe', 'john@doe.com');
const user2 = new User('Jane', 'Doe', 'jane@doe.com');

console.log(user.delete === user2.delete);

// this factory function causes memory leak by duplicating functions inside each object:

// const createUser = ({ firstName, lastName, email }) => ({
//   firstName,
//   lastName,
//   fullName: `${firstName} ${lastName}`,
//   email,
//   checkLastOnline: () => {
//     console.log(`${this.fullName} was last online at ${Date.now()}`);
//   },
//   sendEmail: () => {
//     console.log(`Email sent to ${email}`);
//   },
//   delete: () => {
//     console.log('User removed');
//   },
// });