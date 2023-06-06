import React, { useContext } from "react";


/* 
Tradeoffs of (+ Cons) (- Pros) Compound Pattern:
(+) State management: Compound components manage their own internal state, which they share among the several child components. When implementing a compound component, we don't have to worry about managing the state ourselves.
(+) Single import: We can import the entire compound component from a single file, which makes it easier to use.
(-) Nested components: Compound components are not as flexible as render props. We can't nest components inside the compound component. We can only use the components that are provided by the compound component.
(-) Render props: Compound components are not as flexible as render props. We can't pass a function to the compound component to render the UI. We can only use the components that are provided by the compound component.

*/


const FlyOutContext = React.createContext(null);

export const useFlyOutContext = () => useContext(FlyOutContext);

const FlyOut = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const toggle = React.useCallback(() => setOpen((state) => !state), []);
  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      <div className="flyout">{children}</div>
    </FlyOutContext.Provider>
  );
};

const Input = (props) => {
  const { toggle, value, setValue } = useFlyOutContext();
  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter an address, city ,or ZIP code"
      {...props}
    />
  );
};

const List = ({ children }) => {
  const { open } = useFlyOutContext();
  return (
    open && (
      <div className="flyout-list">
        <ul>{children}</ul>
      </div>
    )
  );
};

const ListItem = ({ children, value }) => {
  const { setValue } = useFlyOutContext();
  return (
    <li
      onMouseDown={() => {
        setValue(value);
      }}
      className="flyout-list-item"
    >
      {children}
    </li>
  );
};

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

export default FlyOut;
