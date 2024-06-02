import Gallery from "@/sections/SiteProduct/Gallery/Gallery";
import {countFiles} from "@/utils/product/ServerFunctions";
import {Product} from "@/utils/product/products";


export default async function GallerySection({productFull} : {productFull: Product} ) {
    const files = await countFiles(productFull.id);

    return (
        <div className={'lg:w-1/2 border-2 border-neutral-300 rounded-lg overflow-hidden'}>
          <Gallery productId={productFull.id} photoNames={files}/>
        </div>
    );
}