import * as React from 'react';
import './style.css';
import Listings from './components/Listings';
import Input from './components/Input';
import { ListingsProvider } from './context/useListingsContext';

/* 
Tradeoffs (+ Cons) (- Pros) of Provider Pattern:
(+) Scalability: There's less risk involved when sharing state across multiple components with the Provider Pattern, as we can easily rename values when our application grows, and easily reuse components.
(-) Complexity: The Provider Pattern adds complexity to our application, as we have to manage the state of the Provider, and the state of the Consumer. This can be mitigated by using a state management library like Redux.
(-) Performance: Components that consume the Provider's context re-render whenever a value changes. This can cause performance issues If you aren't careful which components are consuming the context.
*/

export default function App() {
  return (
    <ListingsProvider>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3em',
      }}
    >
      <Input />
      <Listings />
    </div>
      </ListingsProvider>
  );
}
