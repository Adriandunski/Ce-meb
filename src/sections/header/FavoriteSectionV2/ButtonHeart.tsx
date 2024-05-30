'use client'

import {motion} from "framer-motion";
import FavoriteProductCard from "@/sections/header/FavoriteSection/FavoriteProductCard";
import {useEffect, useState} from "react";

export default function ButtonHeart({products}: { products: any[] }) {

    const [visibleFavorite, setVisible] = useState(false);
    const childVariant = {visible: {height: 'auto'}, hidden: {height: '0px'}};
    const parentVariant = {visible: {}, hidden: {}};

    function handleClick() {
        if(products.length > 0) {
            setVisible(!visibleFavorite);
        }
    }

    return (
        <motion.div variants={parentVariant} initial={'hidden'} animate={visibleFavorite ? 'visible' : 'hidden'}
                    onClick={handleClick}
                    className={'flex basis-auto justify-center items-center py-5 relative'}
        >
            <div className={'relative'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-10 h-10 text-neutral-500">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                </svg>
                {products.length > 0 &&
                    <div
                        className={'translate-y-[12px] translate-x-[15px] absolute bottom-0 right-0 flex justify-center items-center bg-gold p-2 rounded-full w-10 h-6'}>
                        <p className={'text-white text-base font-black font-AdventPro'}>{products.length}</p>
                    </div>}

            </div>
            <motion.div
                className={'absolute mt-[2px] top-full xl:-right-[70px] lg:right-0 flex flex-col w-[400px] max-h-[317px] bg-white rounded-b-md overflow-y-scroll'}
                variants={childVariant}
                layout
                >

                {products.map((productId) =>
                        <FavoriteProductCard key={productId} productId={productId}></FavoriteProductCard>
                   )}

            </motion.div>
        </motion.div>
    );
}