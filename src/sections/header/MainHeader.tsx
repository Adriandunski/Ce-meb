'use client'

import InViewApear from "@/components/Animations/InViewApear";
import Image from "next/image";
import FavoriteHeartSectionV2 from "@/sections/header/FavoriteSectionV2/FavoriteHeartSectionV2";
import {useState} from "react";
import ExtendMenuIcon from "@/sections/header/FavoriteSectionV2/ExtendMenuIcon";
import Navigation from "@/sections/header/Navigation";

export default function MainHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className={'sticky top-0 z-20 bg-[#F7F2ED]'}>
            <InViewApear directory={'t'}>
                <div className={'flex flex-row bg-white border-b-2 border-gold justify-between lg:px-20 px-5 relative'}>
                    <div className={'flex flex-row gap-10 basis-1/3 lg:basis-auto shrink-0'}>
                        <div className={'w-[170px] relative'}>
                            <Image src={'/logo.jpg'} alt={'Logo Ce-Meb'} fill={true} objectFit={'contain'}/>
                        </div>
                        <Navigation open={open} setOpen={setOpen}/>
                    </div>
                    <FavoriteHeartSectionV2/>
                    <ExtendMenuIcon open={open} setOpen={setOpen}/>
                </div>
            </InViewApear>
        </header>
    );
}