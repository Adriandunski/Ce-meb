'use client'

import Image from "next/image";
import {useState} from "react";
import Carosuel from "@/components/Carosuel/Carosuel";
import GalleryCard from "@/sections/SiteProduct/Gallery/GalleryCard";
import {Product} from "@/utils/product/products";
import HeartSection from "@/sections/shopProduct/CardProduct/HeartButtonSection/HeartSection";
import {StorageReference} from "@firebase/storage";

export default function Gallery({photoNames, productId} : {photoNames: string[], productId: number} ) {
    const sizes = [{width: 2500, slides: 5, withOfCard: 150},
        {width: 2200, slides: 5, withOfCard: 150},
        {width: 1835, slides: 5, withOfCard: 150},
        {width: 1570, slides: 4, withOfCard: 150},
        {width: 1200, slides: 3, withOfCard: 150},
        {width: 1024, slides: 2, withOfCard: 170},
        {width: 900, slides: 4, withOfCard: 150},
        {width: 800, slides: 4, withOfCard: 150},
        {width: 530, slides: 3, withOfCard: 150},
        {width: 0, slides: 2, withOfCard: 150},
    ];
    const [imageName, setImageId] = useState(photoNames[0]);

    function switchFoto(idNumber : string) {
        setImageId(idNumber);
    }

    return (
        <div className={'flex flex-col gap-5 basis-1/2 shrink-0 relative'}>
            <div className={'bg-white h-[500px] relative'}>
                <Image src={imageName} alt={imageName} fill className={'object-contain'}/>
            </div>
            <div className={''}>
                <Carosuel breaks={sizes} gap={20} showButtons={false} paddingX={20}>
                    {photoNames.map((value, index) => <GalleryCard key={index} fotoUrl={value} switchFoto={switchFoto}/>)}
                </Carosuel>
            </div>
            <HeartSection productId={productId}/>
        </div>
    );
}