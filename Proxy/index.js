//Intercept and control interactions to target objects

/*
Tradeoffs (+ Cons) (- Pros) of Proxies:

(+)Control: Proxies make it easy to add functionality when interacting with a certain object, such as validation, logging, formatting, notifications, debugging.
(+)Security: Proxies can be used to restrict access to certain properties of an object, or to restrict access to an object altogether.
(+)Performance: Proxies can be used to cache expensive operations, such as API calls, and only execute them when necessary.
(-)Long handler execution: Executing handlers on every object interaction could lead to performance issues.
*/

import { isValidEmail, isAllLetters } from './validator.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get(target, property) {
    return `${new Date()} | The value of ${property} is ${Reflect.get(target, property)}`
  },
  set(target, property, value) {
    if (property === 'email') {
      if (!isValidEmail(value)) {
        throw new Error('Invalid email address!');
      }
    }
    if (property === 'username') {
      if (!isAllLetters(value)) {
        throw new Error('Username must be all letters!');
      }
      if (value.length < 3) {
        throw new Error('Username must be at least 3 characters long!');
      }
      if (typeof value !== 'string') {
        throw new Error('Username must be a string!');
      }
    }
    if (property === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Age must be a number!');
      }
      if (value < 18) {
        throw new Error('Age must be at least 18!');
      }
    }
    return Reflect.set(target, property, value);
  }
});


export default userProxy;

