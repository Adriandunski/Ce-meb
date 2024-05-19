'use client'
import {useProductContext} from "@/components/ProductContextApp";

export default function HeartButtonProductCard({productId} : {productId: number}) {
    const {favorite, addFavorite, deleteFavorite} : {favorite: number[], addFavorite: any, deleteFavorite: any} = useProductContext();

    function handleHeartButton() {
        if (favorite.filter(x => x === productId).length > 0) {
            deleteFavorite(productId);
        } else {
            addFavorite(productId);
        }
    }

    return (
        <div onClick={handleHeartButton}>
            {favorite.filter(x => x === productId).length > 0 ?
                <div className={'h-12 w-12 flex items-center justify-center bg-white rounded-full hover:cursor-pointer'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth="1.5"
                         stroke="currentColor" className="w-8 h-8 translate-y-[1px] text-red-500 fill-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    </svg>
                </div> :
                <div className={'h-12 w-12 flex items-center justify-center bg-white rounded-full hover:cursor-pointer'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth="1.5"
                         stroke="currentColor" className="w-8 h-8 translate-y-[1px] text-neutral-600">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    </svg>
                </div>}
        </div>
    );
}