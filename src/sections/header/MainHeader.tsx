
import Image from "next/image";
import Navigation from "@/sections/header/Navigation";
import useWindowWith from "@/components/useWindowWith";
import FavoriteHeartSection from "@/sections/header/FavoriteSection/FavoriteHeartSection";

export default function MainHeader() {
    // const telScreen = useWindowWith(1024);

    return (
        <header className={'sticky top-0 xl:px-32 px-10 py-5 bg-white border-b-2 border-gold z-10'}>
            <div className={'flex flex-row gap-20 justify-between items-center'}>
                <div className={'flex basis-1/3 lg:basis-auto flex-row items-center gap-20'}>
                    <Image src={'/logo.jpg'} alt={'Logo Ce-Meb'} width={160} height={60}></Image>
                    {/*{telScreen && <Navigation></Navigation>}*/}
                    <Navigation></Navigation>
                </div>
               <FavoriteHeartSection></FavoriteHeartSection>
                {/*{!telScreen &&*/}
                {/*    <div className={'basis-1/3 lg:basis-auto flex justify-end'}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
                {/*             stroke="currentColor" className="w-9 h-9">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*}*/}
            </div>

        </header>
    );
}