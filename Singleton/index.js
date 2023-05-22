//Share a single global instance throughout our application
/*
Tradeoffs (+ Cons) (- Pros) of Singletons:
(+)Memory: Restricting the instantiation to just one instance could potentially save a lot of memory space. Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application.

(-)Unnecessary: ES2015 Modules are singletons by default. We no longer need to explicitly create singletons to achieve this global, non-modifiable behavior.

(-)Dependency Hiding: When importing another module, it may not always be obvious that that module is importing a Singleton. This could lead to unexpected value modification within the Singleton, which would be reflected throughout the application.

(-)Global Scope Pollution: The global behavior of Singletons is essentially the same as a global variable. Global Scope Pollution can end up in accidentally overwriting the value of a global variable, which can lead to a lot of unexpected behavior. Usually, certain parts of the codebase modify the values within global state, whereas others consume that data. The order of execution here is important, understanding the data flow when using a global state can get very tricky as your application grows, and dozens of components rely on each other.

(-)Testing: Since we can't create new instances each time, all tests rely on the modification to the global instance of the previous test. The order of the tests matter in this case, and one small modification can lead to an entire test suite failing. After testing, we need to reset the entire instance in order to reset the modifications made by the tests.
*/
let instance = null;
class DBConnection {

  constructor(uri) {
    if (instance) {
      throw new Error('Cannot instantiate more than one DBConnection, use DBConnection.getInstance()');
    }
    instance = this;
    this.uri = uri;
  }

  static getInstance() {
    if (!instance) {
      instance = new DBConnection('mongodb://...');
    }
    return instance;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log('DB disconnected');
  }
}

export default Object.freeze(new DBConnection('mongodb://...'));

