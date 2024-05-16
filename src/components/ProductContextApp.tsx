'use client'

import {createContext, useContext, useEffect, useState} from 'react';

const ProductContext = createContext<any>([]);
export const useProductContext = () => useContext(ProductContext);


export default function ProductContextApp({children} : {children: any}) {
    const [favorite, setFavorite] = useState<string[]>([]);

    useEffect(() => {
        console.log('odebrano');
    }, [favorite]);

    return(
        <ProductContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </ProductContext.Provider>
    );
}