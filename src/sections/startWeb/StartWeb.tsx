import SequenceTitle from "@/sections/startWeb/SequenceTitle";

export default function StartWeb() {

    return (
        <div className={'flex lg:flex-row flex-col bg-[#F7F2ED] py-32 xl:px-36 px-16 gap-10'}>
            <div className={'basis-1/2 flex flex-col justify-between gap-10'}>
                <div className={'flex flex-col gap-6'}>
                    <SequenceTitle></SequenceTitle>
                    <p className={'font-Roboto text-lg text-neutral-700 tracking-wide leading-7'}>Lorim lobortis, ex
                        vitae lobortis cursus, elit nisi facilisis urna, at porttitor eros leo ac ex.
                        Nunc molestie turpis varius purus accumsan maximus. Nam ut libero aliquet, consequat ipsum
                        sit
                        amet, aliquet odio.</p>
                </div>
                <div className={'flex'}>
                    <button
                        className={'border-2 border-gold py-3 px-5 flex gap-4 text-xl font-medium justify-center items-center'}>
                        Start
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={'basis-1/2 border-2'}>
                <svg></svg>
            </div>
        </div>

    );
}