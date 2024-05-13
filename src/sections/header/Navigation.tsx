'use client'
import useWindowWith from "@/components/useWindowWith";

export default function Navigation() {

    return (
        <nav className={'flex flex-row font-Jost gap-8 text-lg'}>
            <div className={'flex flex-row items-center justify-center gap-2'}>
                <p>Strona Główna</p>
            </div>
            <div className={'flex flex-row items-center justify-center gap-2'}>
                <p>Usługi</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" className="w-7 h-7 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
            </div>
            <div className={'flex flex-row items-center justify-center gap-2'}><p>O nas</p></div>
            <div className={'flex flex-row items-center justify-center gap-2'}>
                <p>Produkty</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" className="w-7 h-7 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
            </div>
            <div className={'flex flex-row items-center justify-center gap-2'}><p>Opinie</p></div>
            <div className={'flex flex-row items-center justify-center gap-2'}><p>Kontakt</p></div>
        </nav>


    );
}