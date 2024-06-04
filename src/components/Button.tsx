'use client'
import {motion} from "framer-motion";

export default function Button({children} : {children: any}) {
    return (

        <motion.div className={'inline-block self-end hover:cursor-pointer'} whileHover={{scale: 1.05, y: -10, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.35)'}}
        >
            {children}
        </motion.div>

    );
}