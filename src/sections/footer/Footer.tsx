import Image from "next/image";

export default function Footer() {
    return(
        <footer id={'footer'} className={'bg-[#171B26] text-white pt-12 pb-10 xl:px-32 lg:px-28 px-10 space-y-10'}>
            <div className={'flex md:flex-row flex-col justify-between xl:gap-24 lg:gap-20 md:gap-2 gap-10'}>
                <div className={'basis-1/3 flex flex-col gap-8'}>
                    <div className={'flex-col space-y-5'}>
                        <Image src={'/logoBiale.png'} alt={'Logo Ce-meb'} width={161} height={60} />
                        <p>Lorim lobortis, ex vitae lobortis cursus, elit nisi facilisis urna, at porttitor eros leo ac ex. Nunc molestie turpis varius purus accumsan maximus. </p>
                    </div>
                    <div className={'flex gap-x-4'}>
                        <Image src={'/zegarek.png'} alt={'zegarek'} width={44} height={45} />
                        <div className={'flex-col'}>
                            <h4>Godziny otwarcia</h4>
                            <p>Pon - Sob 8:00 - 16:00</p>
                        </div>
                    </div>
                </div>
                <div className={'basis-2/3 flex sm:justify-between flex-row  gap-8'}>
                    <div className={'basis-1/2 flex flex-col items-center space-y-5'}>
                        <div className={'flex flex-col gap-y-5'}>
                            <h4 className={'text-lg font-bold'}>Nasza firma</h4>
                            <div className={'flex flex-col items-start  gap-y-4'}>
                                <p>O firmie</p>
                                <p>O firmie</p>
                                <p>O firmie</p>
                                <p>Usługi</p>
                                <p>Kontakt</p>
                            </div>
                        </div>
                    </div>
                    <div className={'basis-1/2 flex flex-col items-center space-y-5'}>
                        <div className={'flex flex-col gap-y-5'}>
                            <h4 className={'text-lg font-bold'}>Nasza firma</h4>
                            <div className={'flex flex-col gap-y-4 items-start'}>
                                <p>O firmie</p>
                                <p>O firmie</p>
                                <p>O firmie</p>
                                <p>Usługi</p>
                                <p>Kontakt</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'h-[1px] bg-white'}></div>
            <div className={'flex justify-between'}>
                <p>Copyright © 2024 by Ce-Meb, Inc. All rights reserved.</p>
                <p>Designed by Adrian Duński</p>
                <div>Icons</div>
            </div>

        </footer>
    );
}