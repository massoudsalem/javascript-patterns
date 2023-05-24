//Use a factory function in order to create objects

/*
Tradeoffs (+ Cons) (- Pros) of Factories:
(+)DRY: Factory functions allow us to create objects without having to repeat the same code over and over again.
(+)Prevent errors: Factory functions can be used to prevent errors by validating the input data before creating the object.
(+)Encapsulation: Factory functions can be used to encapsulate the creation of objects, so that the rest of the code doesn't need to know how the object is created.
(-)Not really a pattern: In JavaScript, there are no classes, so the factory pattern is not really a pattern, but rather a way of creating objects.
(-)Memory Leak: If the factory function returned objects with methods, those methods would be duplicated for each object, which could lead to a memory leak.
*/

const createBook = (title, author, isbn) => ({ title, author, isbn }); // Factory function

export const book1 = createBook('Harry Potter', 'JK Rowling', 'AB123');

export const book2 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 'CD456');

export const book3 = createBook('Moby-dick', 'Herman Melville', 'EF789');