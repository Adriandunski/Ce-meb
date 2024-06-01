'use client'
import Image from "next/image";
import {useState} from "react";
import Carosuel from "@/components/Carosuel/Carosuel";
import GalleryCard from "@/sections/SiteProduct/Gallery/GalleryCard";

export default function Gallery({productId} : {productId: number} ) {
    const sizes = [{width: 2500, slides: 5, withOfCard: 150},
        {width: 2200, slides: 5, withOfCard: 150},
        {width: 1835, slides: 5, withOfCard: 150},
        {width: 1200, slides: 3, withOfCard: 150},
        {width: 1024, slides: 2, withOfCard: 170},
        {width: 900, slides: 4, withOfCard: 150},
        {width: 800, slides: 4, withOfCard: 150},
        {width: 530, slides: 3, withOfCard: 150},
        {width: 0, slides: 2, withOfCard: 150},
    ];

    const [imageId, setImageId] = useState(1);

    function switchFoto(idNumber : number) {
        setImageId(idNumber);
    }

    return (
        <div className={'lg:w-1/2 flex flex-col gap-5 overflow-hidden border-2'}>
            <div className={'bg-neutral-700 h-[500px] relative'}>
                <Image src={`/photoProduct/${productId}/zdjecie${imageId}.jpg`} alt={'Zdjecie'} fill className={'object-cover'}/>
            </div>
            <div className={''}>
                <Carosuel breaks={sizes} gap={20} showButtons={false} paddingX={20}>
                    <GalleryCard key={1} fotoId={1} fotoUrl={'1/zdjecie1.jpg'} switchFoto={switchFoto}/>
                    <GalleryCard key={2}  fotoId={2} fotoUrl={'1/zdjecie2.jpg'} switchFoto={switchFoto}/>
                    <GalleryCard key={3}  fotoId={3} fotoUrl={'1/zdjecie3.jpg'} switchFoto={switchFoto}/>
                    <GalleryCard key={4}  fotoId={4} fotoUrl={'1/zdjecie4.jpg'} switchFoto={switchFoto}/>
                    <GalleryCard key={5}  fotoId={5} fotoUrl={'1/zdjecie5.jpg'} switchFoto={switchFoto}/>
                    <GalleryCard key={6}  fotoId={5} fotoUrl={'1/zdjecie5.jpg'} switchFoto={switchFoto}/>
                    <GalleryCard key={7}  fotoId={5} fotoUrl={'1/zdjecie5.jpg'} switchFoto={switchFoto}/>
                </Carosuel>

            </div>
        </div>
    );
}