'use client'
import {AnimatePresence, motion, useAnimate} from "framer-motion";
import useWindowWith from "@/components/useWindowWith";
import {useEffect} from "react";
import {hidden} from "next/dist/lib/picocolors";
import Link from "next/link";
import LingNavigationContainer from "@/sections/header/LingNavigationContainer";

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
                        <LingNavigationContainer>
                            <Link href={'/'}>Strona Glówna</Link>
                        </LingNavigationContainer>

                        <LingNavigationContainer>
                            <Link href={'/#aboutUs'}>O nas</Link>
                        </LingNavigationContainer>

                        <LingNavigationContainer>
                            <Link href={'/#services'}>Usługi</Link>
                        </LingNavigationContainer>

                        <LingNavigationContainer>
                            <Link href={'/#opinions'}>Opinie</Link>
                        </LingNavigationContainer>

                        <LingNavigationContainer>
                            <Link href={'/#contactUs'}>Kontakt</Link>
                        </LingNavigationContainer>

                    </motion.nav>
               }
        </AnimatePresence>
    );
}