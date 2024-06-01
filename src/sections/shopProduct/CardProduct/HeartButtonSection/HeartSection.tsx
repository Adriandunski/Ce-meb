import HeartButtonProductCard from "@/sections/shopProduct/CardProduct/HeartButtonSection/HeartButtonProductCard";
export default function HeartSection({productId} : {productId: number}) {

    return(
        <div className={'absolute top-0 left-0 w-full flex justify-between mt-5 px-5'}>
            <div></div>
            <HeartButtonProductCard  productId={productId}></HeartButtonProductCard>
        </div>
    );
}
