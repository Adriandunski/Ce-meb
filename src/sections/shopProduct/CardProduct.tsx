import {Product} from "@/utils/product/products";

export default async function CardProduct({product}: { product: Product }) {

    const ifFavorite = true;
    const productFull = await getProductById(product.id);

    function handleClickHeart() {

    }

    return (
        <div className={'flex flex-col shrink-0 gap-3'}>
            <div className={'bg-gray-600 h-96 flex relative justify-center items-center'}>
                Zdjecie
                <div className={'absolute top-0 left-0 w-full flex justify-between mt-5 px-5'}>
                    <div></div>
                    {ifFavorite ?
                        <div className={'p-2 flex justify-between items-center bg-white rounded-full hover:cursor-pointer'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor" className="w-7 h-7 fill-gold text-gold">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                            </svg>
                        </div> :
                        <div className={'h-10 w-10 p-2 flex justify-between items-center bg-white rounded-full'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                            </svg>
                        </div>}

                </div>
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