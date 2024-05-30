'use client'

import ContainerWeb from "@/components/ContainerWeb";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function ProductDescription({params}: { params: { productId: string } }) {
    return (
        <div>
            <ContainerWeb idStr={'top'}>
                <div className={'flex flex-row gap-10'}>
                    <div className={'w-1/2 flex flex-col gap-5'}>
                        <div className={'bg-neutral-700 h-[500px]'}>Zdjecie</div>
                        <div className={'flex overflow-x-scroll gap-5 py-4'}>
                            <div className={'border-2 border-black w-[150px] h-[100px] flex shrink-0'}>1</div>
                            <div className={'border-2 border-black w-[150px] h-[100px] flex shrink-0'}>1</div>
                            <div className={'border-2 border-black w-[150px] h-[100px] flex shrink-0'}>1</div>
                            <div className={'border-2 border-black w-[150px] h-[100px] flex shrink-0'}>1</div>
                            <div className={'border-2 border-black w-[150px] h-[100px] flex shrink-0'}>1</div>
                            <div className={'border-2 border-black w-[150px] h-[100px] flex shrink-0'}>1</div>
                            <div className={'border-2 border-black w-[150px] h-[100px] flex shrink-0'}>1</div>
                        </div>
                    </div>
                    <div className={'basis-1/2 flex flex-col gap-5'}>
                        <div className={'flex flex-col gap-5'}>
                            <h2 className={'text-3xl font-Jost font-bold text-gold'}>Nazwa Produktu</h2>
                            <p className={'font-Jost text-2xl font-semibold text-neutral-700'}>118.00 zł</p>
                            <p className={'text-neutral-700 text-lg tracking-wider leading-8 font-Roboto font-light'}>Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ullamcorper leo. Aenean
                                condimentum porta purus, in aliquam neque tempor vitae. Sed vehicula enim id purus
                                vestibulum
                                cursus. Donec malesuada tortor metus, at dapibus lacus sollicitudin eu. Nunc faucibus
                                neque
                                lectus, in cursus mi condimentum et. Aenean eros risus, aliquam id vehicula in,
                                consequat eu
                                neque. </p>
                            <div>
                                <p>Kolory</p>
                            </div>
                        </div>
                        <div>
                            <button
                                className={'font-AdventPro border-2 border-gold text-gold text-xl rounded-full px-6 py-3 font-semibold'}>
                                <div className={'flex gap-3 items-center'}>
                                    Ulubione
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5"
                                         stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'flex'}>
                        Wymiary
                    </div>

                </div>
            </ContainerWeb>
            <ContactUs></ContactUs>
        </div>
    );
}