//Pass reusable logic down as props to components throughout your application using the Higher-Order Component pattern.

import React from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

/*
  Tradeoffs (+ Cons) (- Pros) of HOC pattern:
  (+) Separation of concerns: Using the Higher-Order Component pattern allows us to keep logic that we want to re-use all in one place. This reduces the risk of accidentally spreading bugs throughout the application by duplicating code over and over, potentially introducing new bugs each time
  (+) Reusability: The HOC pattern allows us to re-use logic in multiple places throughout our application. This is especially useful when we have logic that we want to use in multiple components that are not related to each other
  (-) Prop drilling: The HOC pattern can lead to prop drilling, which is when we have to pass props through multiple layers of components in order to get them to where we need them. This can make our code more difficult to read and maintain
  (-) Naming collisions: The HOC pattern can lead to naming collisions, which is when we have multiple props with the same name being passed to a component. This can make our code more difficult to read and maintain
  (-) Inflexibility: The HOC pattern can lead to inflexibility, which is when we have to pass props through multiple layers of components in order to get them to where we need them. This can make our code more difficult to read and maintain
*/

export default function withLoader(Element, url) {
  return (props) => {
    /* Add logic to:
    1. Fetch data from the url that was passed as an argument.
    2. Show the <LoadingSpinner /> while the  data is being fetched.
    3. Pass the fetched data to the wrapped component.
    */
    const [listings, setListings] = React.useState([]);

    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setListings(res.listings));
    }, []);
  
    if (!listings.length) return <LoadingSpinner/>;

    return <Element listings={listings} {...props} />;
  };
}
