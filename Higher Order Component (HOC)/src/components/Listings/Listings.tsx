import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import withLoader from '../../hoc/withLoader';

export function Listings({listings}) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default withLoader(
  Listings,
  'https://house-lydiahallie.vercel.app/api/listings'
);
