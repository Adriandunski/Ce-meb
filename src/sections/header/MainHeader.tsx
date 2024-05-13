'use client'
import Image from "next/image";
import Navigation from "@/sections/header/Navigation";
import useWindowWith from "@/components/useWindowWith";

export default function MainHeader() {
    const telScreen = useWindowWith(1024);


    return (
        <header className={'sticky top-0 xl:px-32 px-10 py-5 bg-white border-b-2 border-gold z-10'}>
            <div className={'flex flex-row gap-20 justify-between items-center'}>
                <div className={'flex basis-1/3 lg:basis-auto flex-row items-center gap-20'}>
                    <Image src={'/logo.jpg'} alt={'Logo Ce-Meb'} width={160} height={60}></Image>
                    {telScreen && <Navigation></Navigation>}
                </div>
                <div className={'flex lg:basis-auto basis-1/3 justify-center items-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    </svg>
                </div>
                {!telScreen &&
                    <div className={'basis-1/3 lg:basis-auto flex justify-end'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                        </svg>
                    </div>
                }
            </div>

        </header>
    );
}