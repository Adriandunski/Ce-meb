import CardProduct from "@/sections/shopProduct/CardProduct/CardProduct";
import Carosuel from "@/components/Carosuel/Carosuel";
import {Product} from "@/utils/product/products";
import {Suspense} from "react";
import LoadingCardProduct from "@/sections/shopProduct/CardProduct/LoadingCardProduct";

export default async function ProductList({categoryProd} : {categoryProd: string}) {
    const sizes = [{width: 2500, slides: 5, withOfCard: 288},
        {width: 1800, slides: 5, withOfCard: 288},
        {width: 1400, slides: 4, withOfCard: 288},
        {width: 1045, slides: 3, withOfCard: 288},
        {width: 700, slides: 2, withOfCard: 288},
        {width: 0, slides: 1, withOfCard: 350}
    ];

    const product = await getData(categoryProd);

    return(
        <div className={'flex flex-col gap-16'}>
                <Carosuel breaks={sizes}>
                    {product.map((value, index) =>
                        <Suspense key={index} fallback={<LoadingCardProduct></LoadingCardProduct>}>
                            <CardProduct product={value} ></CardProduct>
                        </Suspense>
                    )}
                </Carosuel>
        </div>
    );
}

async function getData(query: string) {
    const res = await fetch(`http://localhost:3000/products/getProducts?category=${query}`, {cache: 'no-cache'});
    const dataJson: Product[] = await res.json();

    return dataJson;
}
