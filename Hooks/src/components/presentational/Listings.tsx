import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import useListings from '../Hooks/useListings';

export default function Listings(props) {
  const data  = useListings();
  return (
    <ListingsGrid>
      {data?.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

