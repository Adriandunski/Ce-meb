import {Product} from "@/utils/product/products";
import CardProductClient from "@/sections/shopProduct/CardProductClient";

export default async function CardProductS({product}: { product: Product }) {

    const productFull = await getProductById(product.id);

    return (
        <CardProductClient productFull={productFull}></CardProductClient>
    );
}

async function getProductById(query: number) {
    const res = await fetch(`http://localhost:3000/products/getProductById?id=${query}`, {cache: 'no-cache'});
    const dataJson: Product = await res.json();

    return dataJson;
}