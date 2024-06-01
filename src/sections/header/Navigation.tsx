'use client'
import {AnimatePresence, motion, useAnimate} from "framer-motion";
import useWindowWith from "@/components/useWindowWith";
import {useEffect} from "react";
import {hidden} from "next/dist/lib/picocolors";
import Link from "next/link";

export default function Navigation({open, setOpen}: { open: boolean, setOpen: any}) {

    const childVariants = {
        visible: {translateY: 0, opacity: 1, transition: {duration: 0.5}},
        hidden: {opacity: 0, transition: {duration: 0.5}}
    };

    const [scope, animate] = useAnimate();

    const bigScreen = useWindowWith(1024);

    useEffect(() => {
        if (bigScreen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [bigScreen, setOpen]);

    return (
        <AnimatePresence>
            {open &&
                    <motion.nav variants={childVariants} initial={'hidden'} whileInView={'visible'} exit={'hidden'}
                        className={'top-full bg-[#F7F2ED] lg:mt-0 mt-[2px] lg:bg-white flex lg:flex-row flex-col items-center justify-center font-Jost gap-8 text-lg absolute lg:static left-0  w-full lg:w-auto h-screen lg:h-auto'}

                    >
                        <div className={'flex flex-row items-center justify-center gap-2'}>
                            <Link href={'/'}>Strona Glówna</Link>
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
                    </motion.nav>
               }
        </AnimatePresence>
    );
}