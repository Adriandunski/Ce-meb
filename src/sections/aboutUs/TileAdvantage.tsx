export default function TileAdvantage({children, topic}: {children: any, topic: string}) {
    return(
        <div className={'flex gap-3 items-center'}>
            <div className={'flex w-12 h-12 p-2 bg-gold rounded-lg justify-center items-center'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-full h-full text-white">
                    {children}
                </svg>
            </div>
            <p className={'font-Jost font-semibold text-xl'}>{topic}</p>
        </div>
    );
}