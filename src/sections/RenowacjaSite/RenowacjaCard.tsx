'use client'

import InViewApear from "@/components/Animations/InViewApear";
import Image from "next/image";

export default function RenowacjaCard({renowacja} : {renowacja:any}) {
    return (
        <div className={'flex gap-10 lg:flex-row lg:even:flex-row-reverse flex-col-reverse even:border-l-4 odd:border-r-4 border-gold'}>
            <div className={'basis-1/2 flex justify-center items-center'}>
                <div className={'flex gap-10'}>
                    <div className={'basis-1/2'}>
                        <InViewApear directory={'r'}>
                            <div className={'relative rounded-lg overflow-hidden'}>
                                <Image
                                    src={`${renowacja.photoSrc}/przed.jpg`}
                                    alt={'usługa tapicerstwo'}
                                    width={350} height={350}></Image>
                                <div className={'absolute w-full bg-red-400 bottom-0 py-2 flex justify-center'}>
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
                                    src={`${renowacja.photoSrc}/po.jpg`}
                                    alt={'usługa tapicerstwo'}
                                    width={350} height={350}>

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
            <div className={'basis-1/2 p-10 border-gold flex flex-col justify-between'}>
                <div className={'flex flex-col  gap-12'}>
                    <div className={'flex'}>
                        <InViewApear directory={'t'} slideOut={0} offset={100}>
                            <span
                                className={'bg-gold text-white px-6 py-2 font-Jost text-xl font-semibold'}>{renowacja.name}
                            </span>
                        </InViewApear>
                    </div>

                    <InViewApear directory={'b'}>
                        <p className={'leading-8 tracking-wide font-Jost text-neutral-800 text-lg'}>Lorem ipsum
                            dolor
                            sit amet, consectetur adipiscing elit. Nam imperdiet augue odio, sit amet
                            tempor eros interdum quis. Phasellus ullamcorper mi ac massa tincidunt tempor.
                            Vivamus
                            aliquam vulputate ligula, nec venenatis magna semper sit amet. Ut mollis orci odio,
                            et
                            scelerisque turpis bibendum eu. Pellentesque consequat nisl eget velit accumsan, ut
                            egestas
                            ante lacinia. Curabitur sit amet quam congue, congue ligula a, volutpat leo</p>
                    </InViewApear>
                </div>
            </div>
        </div>
    );
}