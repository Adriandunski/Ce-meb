import TileAdvantage from "@/sections/aboutUs/TileAdvantage";
import ContainerWeb from "@/components/ContainerWeb";
import Image from "next/image";
import InViewApear from "@/components/Animations/InViewApear";

export default function AboutUs() {
    return (
        <ContainerWeb idStr={'aboutUs'}>
            <div className={'flex flex-col-reverse gap-16 lg:flex-row'}>
                <div
                    className={'md:basis-1/2 relative flex justify-center items-center lg:h-auto h-96 rounded-md overflow-hidden'}>
                    <Image className={'object-cover w-full h-full'}
                           src={'/renowacje/zdjecieOnNas.jpg'}
                           alt={'usługa tapicerstwo'}
                           width={1080} height={810}></Image>
                    <div className={'absolute bottom-0 left-0 bg-gold pl-6 pr-10 py-3 cut'}>
                        <p className={'text-lg font-Jost text-white font-semibold'}><span
                            className={'font-bold text-black text-2xl'}>12+</span> Lat Doświadczenia</p>
                    </div>
                </div>
                <div className={'md:basis-1/2 flex flex-col gap-16'}>
                    <div className={'flex flex-col gap-10 justify-center'}>
                        <div className={'flex flex-col gap-3'}>
                            <InViewApear directory={'b'} offset={0}>
                                <>
                                    <h2 className={'text-red-600 font-medium md:text-left text-center'}>O nas</h2>
                                    <p className={'text-5xl font-Jost font-bold md:text-left text-center'}>Zalety
                                        Wyboru <span
                                            className={'text-gold'}>Naszej</span> Firmy</p>
                                </>
                            </InViewApear>


                            <div className={'flex flex-col gap-5 mt-5'}>
                                <p className={'font-light text-base text-neutral-600 font-Roboto'}>Jesteśmy małym
                                    zakładem
                                    tapicerskim.Zajmujemy się renowacją starych i wysłużonych już mebli tapicerowanych
                                    nadając
                                    im nowe życie, tworzymy własne autorskie projekty, jak również realizujemy projekty
                                    klientów
                                    indywidualnych i firmowych.</p>
                                <p className={'font-light text-base text-neutral-600 font-Roboto'}>Jesteśmy małym
                                    zakładem
                                    tapicerskim.Zajmujemy się renowacją starych i wysłużonych już mebli tapicerowanych
                                    nadając
                                    im nowe życie, tworzymy własne autorskie projekty, jak również realizujemy projekty
                                    klientów
                                    indywidualnych i firmowych.</p>
                            </div>
                        </div>
                        <InViewApear directory={'b'} offset={150}>
                            <div className={'flex gap-8 flex-wrap'}>
                                <TileAdvantage topic={'Jakość'}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                                </TileAdvantage>
                                <TileAdvantage topic={'Jakość'}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                                </TileAdvantage>
                                <TileAdvantage topic={'Jakość'}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                                </TileAdvantage>
                                <TileAdvantage topic={'Jakość'}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                                </TileAdvantage>

                            </div>
                        </InViewApear>
                    </div>
                    <div>
                        <InViewApear directory={'b'} offset={150}>

                            <button
                                className={'py-[16px] px-5 flex gap-3 border-2 border-gold font-Jost font-semibold rounded-md'}>
                                Poznaj Usługi
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.8"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                                </svg>

                            </button>
                        </InViewApear>
                    </div>
                </div>
            </div>
        </ContainerWeb>
    )
        ;
}