// Use observables to notify subscribers when an event occurs

/*
Tradeoffs (+ Cons) (- Pros) of Observers:

(+)Separation of Concerns: The observer objects aren't tightly coupled to the observable object, and can be (de)coupled at any time. The observable object is responsible for monitoring the events, while the observers simply handle the received data.
(-)Performance: Notifying all subscribers might take a significant amount of time if the observer handling becomes too complex, or if there are too many subscribers to notify.
(-)Debugging: Debugging can be more difficult with the Observer pattern, as it can be hard to trace the flow of data between the observable object and the observers. This can make it harder to identify and fix bugs in the code.
*/

let observables = [];

export default Object.freeze({
  subscribe: (observable) => {
    observables.push(observable);
  },
  unsubscribe: (observable) => {
    observables = observables.filter((obs) => obs !== observable);
  },
  notify: (data) => {
    observables.forEach((observer) => observer(data));
  },
});
