import * as React from 'react';
import './style.css';
import Listings from './components/container/Listings';

/*
Tradeoffs (+ Cons) (- Pros) of Container-Presentational pattern:
(+) Separation of concerns: Container components are responsible for fetching data and business logic whereas presentational components are responsible for rendering UI.
(+) Reusability: Presentational components are reusable as they are not tied to any specific data.
(+) Testability: Presentational components are easy to test as they are not tied to any specific data.
(-) Not necessary: Container components are not always necessary. If you have a small app, you can use the react hooks to manage state and fetch data.
(-) Over-engineering: If you have a small app, using the container-presentational pattern can be overkill.
*/

export default function App() {
  return <Listings />;
}
