import React, { useContext } from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import useListingsContext from '../context/useListingsContext';

export default function Listings() {
  const listings = useListingsContext();

  if (!listings) return null;

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
