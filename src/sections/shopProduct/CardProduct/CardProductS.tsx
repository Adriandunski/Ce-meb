import {Product} from "@/utils/product/products";
import CardProductClient from "@/sections/shopProduct/CardProduct/CardProductClient";
import {getProductByIdFirebse} from "@/utils/ProductsRepo";
import {getImage} from "@/utils/StorageRepo";

export default async function CardProductS({product}: { product: Product }) {

    product.photoSrc = await getImage(`${product.photoSrc}/zdjecie1.jpg`);

    return (
        <CardProductClient productFull={product}></CardProductClient>
    );
}

