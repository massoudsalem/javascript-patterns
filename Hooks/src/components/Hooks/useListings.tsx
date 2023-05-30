//Use functions to reuse stateful logic among multiple components throughout the app

import React from 'react';
/*
  Tradeoffs (+ Cons) (- Pros) of Custom Hooks pattern:
  (+) Simplifies components: Hooks make it easy to add state to functional components, rather than (usually more complex) class components.
  (+) Reusing stateful logic: Hooks allow you to reuse stateful logic among multiple components across the application, which reduces the chances of errors, and allows for composition with plain functions.
  (+) Sharing non-visual logic: Hooks make it easy to share non-visual logic, without having to use patterns like HOC or Render Props
  (+) Good alternative to older React design patterns: The hooks pattern is a good alternative to an older React design pattern, which is mainly used with Class components, namely the Presentational/Container pattern.
  (-) Rules of Hooks: Hooks require certain rules to be followed. without a linter plugin, it is difficult to know which rule has been broken, and you can accidentally end up using the wrong built-in hook.
*/
export default function useListings() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return data;
}
