import React from 'react'
import useListings from '../hooks/useListings'

export const ListingsContext = React.createContext(null);

export const useListingsContext = () => { // this is a custom hook that returns the listingsContext to the consumer
    return React.useContext(ListingsContext); 
}

export const ListingsProvider = ({ children }) => {
    console.log(ListingsContext);
    const listings = useListings();
    if (!listings) return null;
    return (
        <ListingsContext.Provider value={listings}>
            {children}
        </ListingsContext.Provider>
    )
}


export default useListingsContext;