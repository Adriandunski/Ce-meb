'use client'
import {useEffect, useRef} from "react";
import {AnimatePresence, motion, useAnimate, useInView, usePresence} from "framer-motion";

export default function InViewApear({children, directory, offset = 200, delay = 0, slideOut = 30, once = true}: {
    children: any,
    directory: string,
    offset?: number,
    delay?: number,
    slideOut?: number,
    once?: boolean
}) {
    const [scope, animate] = useAnimate();
    const refParent = useRef(null);
    const inView = useInView(refParent, {once: once, margin: `0px 0px -${offset}px 0px`});

    useEffect(() => {
        if (inView) {
            animate(scope.current, {y: '0px', x: '0px', opacity: 1}, {
                mass: 1,
                type: "spring",
                damping: 9,
                delay: delay
            });
        }
    }, [inView]);


    return (
        <div ref={refParent}>
            <motion.div ref={scope} initial={{
                y: directorySet(directory, 'y', slideOut),
                x: directorySet(directory, 'x', slideOut),
                opacity: 0
            }}>
                {children}
            </motion.div>
        </div>
    );
};

function directorySet(directory: string, caller: string, slideOut: number): string {

    if ((directory === 't' && caller === 'y') || (directory === 'l' && caller === 'x')) {
        return `-${slideOut}px`;
    } else if ((directory === 'b' && caller === 'y') || (directory === 'r' && caller === 'x')) {
        return `${slideOut}px`;
    } else {
        return '0px'
    }
}