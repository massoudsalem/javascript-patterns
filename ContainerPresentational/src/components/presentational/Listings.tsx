import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

export default function Listings(props) {
  return (
    <ListingsGrid>
      {props.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
