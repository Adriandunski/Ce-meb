'use client'
import {Product} from "@/utils/product/products";
import Image from "next/image";
import HeartSection from "@/sections/shopProduct/CardProduct/HeartButtonSection/HeartSection";
import {useRouter} from "next/navigation";

export default function CardProductClient({productFull}: { productFull: any}) {

    const router = useRouter();

    function handleClick() {
        router.push(`/${productFull.name}/${productFull.id}`);
    }

    return (
        <div className={'flex flex-col shrink-0 gap-3 h-full hover:shadow-2xl group transition-all'}>
            <div className={'bg-gray-600 shrink-0 h-96 flex relative justify-center items-center overflow-hidden'}>
                <Image src={`${productFull.photoSrc}/zdjecie1.jpg`}
                       className={'object-cover transition-all group-hover:scale-110 duration-700'}
                       alt={productFull.name}
                       fill
                       draggable={false}
                />
                <HeartSection productId={productFull.id}></HeartSection>
                <div
                    className={'absolute xl:hidden group-hover:block bottom-0  w-full'}>

                    <div className={'py-2 flex justify-center bg-gold hover:bg-white hover:border-b-4 hover:border-gold hover:text-gold text-white font-Jost hover:scale-110 hover:cursor-pointer transition-all'} onClick={handleClick}>
                        <p> Zobacz więcej </p>
                    </div>


                </div>
            </div>
            <div className={'flex flex-col justify-between h-full'}>
                <div className={'p-2 flex flex-col gap-3'}>
                    <p className={'font-semibold tracking-wide font-Jost text-sm hover:text-gold hover:cursor-pointer transition-all duration-500'}
                       onClick={handleClick}>
                        {productFull.name}
                    </p>
                </div>
                <div className={'flex flex-col p-2 gap-3'}>
                    <div className={'h-[1px] bg-neutral-300'}></div>
                    <p className={'text-neutral-700 font-AdventPro font-semibold tracking-widest'}>{productFull.price.toFixed(2)} zł</p>
                </div>
            </div>
        </div>
    );
}