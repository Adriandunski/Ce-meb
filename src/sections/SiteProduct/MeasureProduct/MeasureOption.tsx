export default function MeasureOption({keyString, value} : {keyString:string, value: string}) {
    return(
        <div className={'flex flex-row gap-3 w-full justify-between font-AdventPro text-lg border-2 border-neutral-600 px-2 py-1 rounded-sm'}>
            <p>{keyString}</p>
            <div className={'flex flex-row gap-3'}>
                <span>: </span>
                <p className={'font-semibold'}> {value}</p>
            </div>
        </div>
    );
}