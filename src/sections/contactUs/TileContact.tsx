import Link from "next/link";
import Image from "next/image";

export default function TileContact({children, topic, isDiff}: {topic: string, isDiff: boolean, children: any[]}) {
    return (
        <div className={'w-full rounded-2xl p-4 flex flex-col gap-3 justify-start items-center shadow-2xl'}>

            {isDiff ?
                <div
                    className={'bg-gold border-red-300 rounded-full w-20 h-20 flex justify-center items-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                        {children[0]}
                    </svg>
                </div> :
                <div
                    className={'border-4 border-red-300 rounded-full w-20 h-20 flex justify-center items-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        {children[0]}
                    </svg>
                </div>}


            <p className={'font-semibold text-neutral-800 text-2xl font-AdventPro'}>{topic}</p>
            <div className={'flex flex-col justify-center items-center text-center'}>
                {children[1]}
            </div>
        </div>
    );
}