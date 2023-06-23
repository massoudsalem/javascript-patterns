import React, { useRef } from "react";
import "./App.css";

// Decouple methods that execute tasks by sending commands to a commander

/*
Tradeoffs (+ Cons) (- Pros) of command:
(+) Decoupling: The Command pattern decouples the object that invokes the operation from the one that knows how to perform it.
(+) Extensibility: You can assemble a set of simple commands into a complex one by implementing composite commands.
(+) Queueing and logging: You can support undoable operations or operations that can be logged for auditing purposes.
(-) Complexity: The code may become more complicated since you’re introducing a whole new layer between senders and receivers.
*/

class Order {
  constructor(item) {
    this.item = item;
  }
}

class OrdersListManager {
  // note you can also use a stack to implement redo or trim the history but I didn't do it here
  constructor(list = [], history = []) {
    this.list = list;
    this.history = history;
  }

  execute(command) {
    this.history.push(command);
    command.execute();
  }

  undo() {
    if (this.history.length === 0) return;
    const command = this.history.pop();
    command.undo();
  }
}

class Command {
  constructor() {
    if (this.constructor === Command) {
      throw new Error("This class cannot be instantiated!");
    }
  }

  execute() {
    throw new Error("This method must be overwritten!");
  }

  undo() {
    throw new Error("This method must be overwritten!");
  }
}

class AddCommand extends Command {
  constructor(item, setList) {
    super();
    this.item = item;
    this.setList = setList;
  }

  execute() {
    this.setList((list) => [...list, this.item]);
  }

  undo() {
    this.setList((list) => list.filter((item) => item !== this.item));
  }
}

class RemoveCommand extends Command {
  constructor(item, setList) {
    super();
    this.item = item;
    this.setList = setList;
  }

  execute() {
    this.setList((list) => list.filter((item) => item !== this.item));
  }

  undo() {
    this.setList((list) => [...list, this.item]);
  }
}

function App() {
  const [ordersList, setOrdersList] = React.useState([]);
  const history = useRef([]);
  const ordersListManager = new OrdersListManager(ordersList, history.current);
  const inputRef = React.useRef();

  return (
    <div className="App">
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          const order = new Order(inputRef.current.value);
          ordersListManager.execute(
            new AddCommand(order, setOrdersList)
          );
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          ordersListManager.undo();
        }}
        disabled={ordersListManager.history.length === 0}
      >
        Undo
      </button>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {ordersListManager.list.map((item, index) => (
            <tr key={index}>
              <td>
                <span>{item.item}</span>
              </td>
              <td>
                <button
                  onClick={() => {
                    ordersListManager.execute(
                      new RemoveCommand(item, setOrdersList)
                    );
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
