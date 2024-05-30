import {Product} from "@/utils/product/products";
import HeartSection from "@/sections/shopProduct/CardProduct/HeartButtonSection/HeartSection";
import Image from "next/image";

export default async function CardProductS({product}: { product: Product }) {

    const productFull = await getProductById(product.id);

    return (
        <div className={'flex flex-col shrink-0 gap-3'}>
            <div className={'bg-gray-600 h-96 flex relative justify-center items-center'}>
                <Image src={`${productFull.photoSrc}/zdjecie1.jpg`}
                       alt={productFull.name}
                       fill
                       draggable={false}
                       style={{
                           objectFit: 'cover', // cover, contain, none
                       }}/>
                <HeartSection productId={productFull.id}></HeartSection>
            </div>
            <div className={'p-3 flex flex-col gap-3'} >
                <p className={'font-semibold tracking-wide font-Jost'}>{productFull.category} {productFull.name}</p>
                <div className={'h-[1px] bg-neutral-300'}></div>
                <p className={'text-neutral-700 font-AdventPro font-semibold tracking-widest'}>{productFull.price} zł</p>
            </div>
        </div>
    );
}

async function getProductById(query: number) {
    const res = await fetch(`http://localhost:3000/products/getProductById?id=${query}`, {cache: 'no-cache'});
    const dataJson: Product = await res.json();

    return dataJson;
}