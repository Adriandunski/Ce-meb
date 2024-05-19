import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export default function LoadingCardProduct() {
    return (
        <div className={'flex flex-col shrink-0 gap-3'}>
            <Skeleton height={384}></Skeleton>
            <div className={'p-3 flex flex-col gap-3'}>
                <p className={'font-semibold tracking-wide font-Jost'}><Skeleton></Skeleton></p>
                <div className={'h-[1px] bg-neutral-300'}></div>
                <p className={'w-full'}>
                    <Skeleton></Skeleton>
                </p>
            </div>
        </div>
    );
}