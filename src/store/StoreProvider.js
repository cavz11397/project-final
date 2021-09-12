import React from 'react';
import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from './StoreReducer';


const StoreContext = createContext();

const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(storeReducer, initialStore);

    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
}

export { StoreProvider };
export default StoreContext;
