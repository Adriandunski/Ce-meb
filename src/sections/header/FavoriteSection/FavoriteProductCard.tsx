'use client'

import {Product} from "@/utils/product/products";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {useProductContext} from "@/components/ProductContextApp";
import Image from "next/image";
import {motion} from "framer-motion";


export default function FavoriteProductCard({productId}: { productId: number}) {

    const [product, setProduct] = useState<Product>();
    const {deleteFavorite}: { deleteFavorite: any } = useProductContext();

    function deleteFavortieHandle(event: any) {
        event.stopPropagation();
        deleteFavorite(productId);
    }


    useEffect(() => {
        getProductById(productId).then(value => setProduct(value));
    }, []);

    return (
       <motion.div
                    layout
                    exit={{x: -400, opacity: 0}}
                    className={'flex items-center gap-5 py-2 px-4 justify-between border-b-2'}>
                    <div className={'flex basis-full gap-5 items-center'}>
                        {product ?
                            <div
                                className={'relative shrink-0 w-[100px] h-[60px] bg-neutral-700 rounded-sm overflow-hidden'}>
                                <Image src={`${product.photoSrc}/zdjecie1.jpg`}
                                       alt={product.name}
                                       fill
                                       draggable={false}
                                       style={{
                                           objectFit: 'cover', // cover, contain, none
                                       }}/>
                            </div> :
                            <Skeleton width={100} height={60}></Skeleton>
                        }


                        <div className={'flex flex-col gap-1 basis-full'}>
                            {product ?
                                <>
                                    <p className={'text-sm'}>{product.name}</p>
                                    <p className={'text-sm'}> {product.price} zł</p>
                                </> :
                                <>
                                    <Skeleton></Skeleton>
                                    <Skeleton></Skeleton>
                                </>}
                        </div>

                    </div>

                    <button onClick={(event) => deleteFavortieHandle(event)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                </motion.div>
    );
}

async function getProductById(productId: number) {
    const res = await fetch(`http://localhost:3000/products/getProductById?id=${productId}`);
    const dataJson: Product = await res.json();

    return dataJson;
}