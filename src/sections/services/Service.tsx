import ContainerWeb from "@/components/ContainerWeb";
import Image from "next/image";
import InViewApear from "@/components/Animations/InViewApear";

export default function Service() {
    return (
        <ContainerWeb idStr={'services'} className={'bg-neutral-100'}>
            <div className={'flex flex-col gap-16'}>
                <div className={'flex flex-col gap-10 items-center justify-center'}>
                    <InViewApear directory={'b'} offset={250}>
                        <div className={'flex flex-col items-center justify-center'}>
                            <h2 className={'text-red-600 font-medium'}>Oferta</h2>
                            <p className={'text-5xl font-Jost font-bold'}>Odkryj Nasze <span
                                className={'text-gold'}>Usługi</span>
                            </p>
                        </div>
                    </InViewApear>
                </div>
                <div className={'flex gap-10 lg:flex-row-reverse flex-col-reverse'}>
                    <div className={'basis-1/2 flex justify-center items-center'}>
                        <div className={'flex gap-10'}>
                            <div className={'basis-1/2'}>
                                <InViewApear directory={'r'} slideOut={0}>
                                    <div className={'relative rounded-lg overflow-hidden'}>
                                        <Image
                                            src={'/renowacje/mebelPrzed-01.jpg'}
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
                                            src={'/renowacje/mebelPo-01.jpg'}
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
                    <div className={'basis-1/2 p-10 flex flex-col  gap-12 border-l-4 border-gold'}>
                        <div className={'flex'}>
                            <InViewApear directory={'t'} slideOut={0}>
                            <span
                                className={'bg-gold text-white px-6 py-2 font-Jost text-xl font-semibold'}>Renowacje
                            </span>
                            </InViewApear>
                        </div>

                        <InViewApear directory={'b'}>
                            <p className={'leading-8 tracking-wide font-Jost text-neutral-800 text-lg'}>Lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit. Nam imperdiet augue odio, sit amet
                                tempor eros interdum quis. Phasellus ullamcorper mi ac massa tincidunt tempor. Vivamus
                                aliquam vulputate ligula, nec venenatis magna semper sit amet. Ut mollis orci odio, et
                                scelerisque turpis bibendum eu. Pellentesque consequat nisl eget velit accumsan, ut
                                egestas
                                ante lacinia. Curabitur sit amet quam congue, congue ligula a, volutpat leo</p>
                        </InViewApear>
                    </div>
                </div>

                <div className={'flex lg:flex-row flex-col-reverse'}>
                    <div className={'basis-1/2 p-10 flex justify-center items-center'}>
                        <InViewApear directory={'l'}>
                            <Image className={'rounded-lg'} src={'/renowacje/tapicerstwo1.jpg'}
                                   alt={'usługa tapicerstwo'}
                                   width={500} height={500}></Image>
                        </InViewApear>
                    </div>
                    <div
                        className={'basis-1/2 p-10 flex flex-col  gap-12 lg:border-l-0 lg:border-r-4 border-l-4 border-gold'}>
                        <div className={'flex lg:justify-end justify-start'}>
                            <InViewApear directory={'t'} slideOut={0}>
                            <span
                                className={'bg-gold text-white px-6 py-2 font-Jost text-xl font-semibold'}>Tapicerstwo</span>
                            </InViewApear>
                        </div>
                        <InViewApear directory={'b'}>
                            <p className={'leading-8 tracking-wide font-Jost text-neutral-800 text-lg'}>Lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit. Nam imperdiet augue odio, sit amet
                                tempor eros interdum quis. Phasellus ullamcorper mi ac massa tincidunt tempor. Vivamus
                                aliquam vulputate ligula, nec venenatis magna semper sit amet. Ut mollis orci odio, et
                                scelerisque turpis bibendum eu. Pellentesque consequat nisl eget velit accumsan, ut
                                egestas
                                ante lacinia. Curabitur sit amet quam congue, congue ligula a, volutpat leo</p>
                        </InViewApear>
                    </div>
                </div>

                <div className={'flex lg:flex-row-reverse flex-col-reverse'}>
                    <div className={'basis-1/2 p-10 flex justify-center items-center'}>
                        <InViewApear directory={'r'}>
                            <Image className={'rounded-lg'} src={'/renowacje/tapicerstwo1.jpg'}
                                   alt={'usługa tapicerstwo'}
                                   width={500} height={500}></Image>
                        </InViewApear>
                    </div>
                    <div className={'basis-1/2 p-10 flex flex-col  gap-12 border-l-4 border-gold'}>
                        <div className={'flex'}>
                            <InViewApear directory={'t'} slideOut={0}>
                            <span
                                className={'bg-gold text-white px-6 py-2 font-Jost text-xl font-semibold'}>Tapicerstwo</span>
                            </InViewApear>
                        </div>
                        <InViewApear directory={'b'}>
                            <p className={'leading-8 tracking-wide font-Jost text-neutral-800 text-lg'}>Lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit. Nam imperdiet augue odio, sit amet
                                tempor eros interdum quis. Phasellus ullamcorper mi ac massa tincidunt tempor. Vivamus
                                aliquam vulputate ligula, nec venenatis magna semper sit amet. Ut mollis orci odio, et
                                scelerisque turpis bibendum eu. Pellentesque consequat nisl eget velit accumsan, ut
                                egestas
                                ante lacinia. Curabitur sit amet quam congue, congue ligula a, volutpat leo</p>
                        </InViewApear>
                    </div>
                </div>
            </div>
        </ContainerWeb>
    );
}