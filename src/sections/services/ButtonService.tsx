'use client'
import Link from "next/link";
import {motion} from "framer-motion";

export default function ButtonService() {
    return (

        <motion.div className={'inline-block border-2 self-end'} whileHover={{scale: 1.05, y: -10, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.35)'}}
        >
            <Link
                className={'bg-green-400 px-6 text-xl tracking-wider font-light py-2 text-white rounded-lg font-Jost'}
                href={'renowacje'}>Zobacz więcej!</Link>
        </motion.div>

    );
}