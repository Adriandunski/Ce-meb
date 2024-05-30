'use client'
import ButtonHeart from "@/sections/header/FavoriteSectionV2/ButtonHeart";
import {useProductContext} from "@/components/ProductContextApp";


export default function FavoriteHeartSectionV2() {

    const {favorite}: {
        favorite: number[]
    } = useProductContext();


    return(
        <div className={'flex lg:basis-auto basis-full justify-center'}>
            <ButtonHeart products={favorite}></ButtonHeart>
        </div>
    );
}