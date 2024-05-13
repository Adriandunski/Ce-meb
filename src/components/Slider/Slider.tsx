'use client'

import {motion} from "framer-motion";
import useWindowSize from "@/components/Slider/useWindowSize";
import {useEffect, useState} from "react";
export default function Slider({children}: { children: any[] }) {
    const [indexSlide, setIndexSlide] = useState(0);
    const [slides, setSlides] = useState(children);
    const windowSize = useWindowSize();

    function calculateValueStepSlide(step: number) {
        if (step == 0) {
            makeStepSlide(indexSlide + 0.00000001);
        } else {
            makeStepSlide(Math.floor(indexSlide + step));
        }
    }
    function makeStepSlide(newCardIndex: number) {
        setIndexSlide(newCardIndex);
    }

    useEffect(() => {
        checking();
    }, [indexSlide]);

    function checking() {
        console.log(`Slide: ${indexSlide}`);
        if (indexSlide === children.length - 2) {
            console.log('dodaj')
        }
    }

    return (
        <div className={'overflow-hidden relative'}>
            <motion.div
                animate={{x: indexSlide * windowSize * -1}}
                transition={{duration: 1, type: 'spring'}}
                drag={'x'}
                className={'flex'}>
                {slides}
            </motion.div>

            <div className={'absolute -translate-y-1/2 top-1/2 left-0 ml-10'}
                 onClick={() => calculateValueStepSlide(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"/>
                </svg>
            </div>
            <div className={'absolute -translate-y-1/2 top-1/2 right-0 mr-10'}
                 onClick={() => calculateValueStepSlide(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"/>
                </svg>
            </div>
        </div>
    );
}