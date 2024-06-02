'use client'

import {TypeAnimation} from "react-type-animation";
import InViewApear from "@/components/Animations/InViewApear";
import Image from "next/image";
import TitleRenowacja from "@/sections/RenowacjaSite/TitleRenowacja";

export default function RenowacjaCard() {
    return (
        <div className={'flex gap-10 lg:flex-row flex-col even:flex-row-reverse'}>
            <div className={'basis-1/3 border-2'}>
                <TitleRenowacja/>
                <span>jaki tekst</span>
            </div>
            <div className={'basis-2/3 border-2 flex flex-row justify-center items-center'}>
                <div className={'flex gap-10'}>
                    <div className={'basis-1/2'}>
                        <InViewApear directory={'r'}>
                            <div className={'relative rounded-lg overflow-hidden'}>
                                <Image
                                    src={'/renowacje/mebelPrzed-01.jpg'}
                                    alt={'usługa tapicerstwo'}
                                    width={400} height={350}></Image>
                                <div
                                    className={'absolute w-full bg-red-400 bottom-0 py-2 flex justify-center'}>
                                    <span
                                        className={'text-white font-AdventPro text-2xl font-semibold tracking-widest'}>PRZED</span>
                                </div>
                            </div>
                        </InViewApear>
                    </div>

                    <div className={'basis-1/2 '}>
                        <InViewApear directory={'r'} delay={0.5}>
                            <div className={'relative rounded-lg overflow-hidden'}>
                                <Image
                                    src={'/renowacje/mebelPo-01.jpg'}
                                    alt={'usługa tapicerstwo'}
                                    width={400} height={350}>

                                </Image>
                                <div
                                    className={'absolute w-full bg-green-300 bottom-0 py-2 flex justify-center'}>
                                    <span
                                        className={'text-white font-AdventPro text-2xl font-semibold tracking-widest'}>PO</span>
                                </div>
                            </div>
                        </InViewApear>
                    </div>
                </div>
            </div>
        </div>
    );
}