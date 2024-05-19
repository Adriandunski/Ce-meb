'use client'

import {createContext, useContext, useEffect, useState} from 'react';
import {CookProduct} from "@/app/cookies/CookProductInter";

const ProductContext = createContext<any>({});
export const useProductContext = () => useContext(ProductContext);


export default function ProductContextApp({children} : {children: any}) {
    const [favorite, setFavorite] = useState<number[]>([]);

    useEffect(() => {
        getAllProducts().then(value => setFavorite(value));
    }, []);

    function addFavorite(productId: number) {
        setFavorite([...favorite, productId]);
        addFavoriteProductCookies(productId);
    }
    function deleteFavorite(productId: number) {
        const copy = favorite.slice().filter(x => x !== productId);
        setFavorite(copy);
        deleteFavoriteProductCookies(productId);
    }

    return(
        <ProductContext.Provider value={{ favorite, addFavorite, deleteFavorite }}>
            {children}
        </ProductContext.Provider>
    );
}

function addFavoriteProductCookies(productId: number) {
    const result = fetch(`http://localhost:3000/cookies/setFavoriteProduct?favorite=${productId}`, {cache: 'no-cache'});
    result.then(() => {console.log('Dodano cookie')});
}

function deleteFavoriteProductCookies(productId: number) {
    const result = fetch(`http://localhost:3000/cookies/deleteFavoriteProduct?favorite=${productId}`, {cache: 'no-cache'});
    result.then(() => {console.log('Usunieto cookie')});
}

async function getAllProducts() {
    const result = await fetch(`http://localhost:3000/cookies/getAllFavoriteProducts`, {cache: 'no-cache'});
    const dataJson: CookProduct[] =  await result.json();
    const numbers: number[] = dataJson.map(x => x.id);

    return numbers;
}