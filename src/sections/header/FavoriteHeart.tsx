'use client'

import {useProductContext} from "@/components/ProductContextApp";

export default function FavoriteHeart() {
    const {favorite, setFavorite} = useProductContext();

    return (
        <div className={'flex lg:basis-auto basis-1/3 justify-center items-center'}>
            {favorite.length < 1 ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-10 h-10 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                </svg>
                :
                <div className={'relative'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-10 h-10 fill-red-500 text-gold">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    </svg>
                    <div className={'translate-y-[7px] translate-x-[7px] absolute bottom-0 right-0 flex justify-center items-center bg-white border-2 border-black p-1 rounded-full w-6 h-6'}>
                        <p className={' text-sm font-black font-AdventPro'}>{favorite.length}</p>
                    </div>
                </div>
            }

        </div>
    );
}