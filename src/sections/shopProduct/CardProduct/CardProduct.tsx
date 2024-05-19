import {Product} from "@/utils/product/products";
import HeartButtonProductCard from "@/sections/shopProduct/CardProduct/HeartButtonSection/HeartButtonProductCard";
import HeartSection from "@/sections/shopProduct/CardProduct/HeartButtonSection/HeartSection";

export default async function CardProduct({product}: { product: Product }) {

    const productFull = await getProductById(product.id);

    return (
        <div className={'flex flex-col shrink-0 gap-3'}>
            <div className={'bg-gray-600 h-96 flex relative justify-center items-center'}>
                Zdjecie
                <HeartSection productId={product.id}></HeartSection>
            </div>
            <div className={'p-3 flex flex-col gap-3'}>
                <p className={'font-semibold tracking-wide font-Jost'}>{productFull.category} {productFull.name}</p>
                <div className={'h-[1px] bg-neutral-300'}></div>
                <p>{product.price} zł</p>
            </div>
        </div>
    );
}

async function getProductById(query: number) {
    const res = await fetch(`http://localhost:3000/products/getProductById?category=${query}`, {cache: 'no-cache'});
    const dataJson: Product = await res.json();

    return dataJson;
}