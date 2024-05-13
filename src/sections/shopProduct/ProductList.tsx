'use client'

import CardProduct from "@/sections/shopProduct/CardProduct";
import Carosuel from "@/components/Carosuel/Carosuel";
import {useEffect, useState} from "react";
import {Product} from "@/utils/product/products";

export default function ProductList({categoryProd} : {categoryProd: string}) {
    const sizes = [{width: 2500, slides: 5, withOfCard: 288},
        {width: 1800, slides: 5, withOfCard: 288},
        {width: 1400, slides: 4, withOfCard: 288},
        {width: 1045, slides: 3, withOfCard: 288},
        {width: 700, slides: 2, withOfCard: 288},
        {width: 0, slides: 1, withOfCard: 350}
    ];
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        const data:Promise<any[]> = getData(categoryProd);

        const products = data.then(value => {
            return value.map(x => new Product(x.id, x.category, x.name, x.price))
        })

        products.then(value => setProduct(value));
    }, []);


    return(
        <div className={'flex flex-col gap-16'}>
            <Carosuel breaks={sizes}>
                {product.map((value, index) =>
                    <CardProduct product={value} key={index}></CardProduct>)}
            </Carosuel>
        </div>
    );
}

async function getData(query: string) {
    const res = await fetch(`http://localhost:3000/products/api?category=${query}`);

    return res.json();
}
