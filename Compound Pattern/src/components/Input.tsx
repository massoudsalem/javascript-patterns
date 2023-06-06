import React from 'react';
import { useListingsContext } from '../context/ListingsProvider';
import FlyOut from './FlyOut';


export default function Input(props) {
  const listings = useListingsContext();

  return (
    <FlyOut>
      <FlyOut.Input {...props} />
      <FlyOut.List>
        {listings.map((listing) => (
          <FlyOut.ListItem
            key={listing.id}
            value={listing.name}
          >
            {listing.name}
          </FlyOut.ListItem>
        ))}
      </FlyOut.List>
    </FlyOut>
  );
}
