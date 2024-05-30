'use client'
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {motion, useAnimate, useInView} from "framer-motion";

export default function InViewApear({children, directory, offset = 0, delay = 0}: {
    children: any,
    directory: string,
    offset?: number,
    delay?: number
}) {
    const [scope, animate] = useAnimate();
    const refParent = useRef(null);
    const inView = useInView(refParent, {once: true, margin: `0px 0px -${offset}px 0px`});

    useEffect(() => {
        if (inView) {
            animate(scope.current, {y: '0px', x: '0px', opacity: 1}, {duration: 0.6, type: "spring", damping: 9, delay: delay});
        }
    }, [inView]);

    return (
        <div ref={refParent}>
            <motion.div ref={scope} initial={{y: directorySet(directory, 'y'), x: directorySet(directory, 'x'), opacity: 0}}>
                {children}
            </motion.div>
        </div>
    );
};

function directorySet(directory: string, caller: string): string {

    if (directory === 't' && caller === 'y') {
        return '-30px';
    } else if (directory === 'b' && caller === 'y') {
        return '30px';
    } else if (directory === 'l' && caller === 'x') {
        return '-100px'
    } else if (directory === 'r' && caller === 'x') {
        return '100px'
    } else {
        return '0px'
    }
}