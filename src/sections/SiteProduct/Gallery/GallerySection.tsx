import Gallery from "@/sections/SiteProduct/Gallery/Gallery";
import {Product} from "@/utils/product/products";
import {getAllFilesFromPath} from "@/utils/StorageRepo";
import {getDownloadURL} from "@firebase/storage";


export default async function GallerySection({productFull} : {productFull: Product} ) {

    const photoUrls = await takeFiles(productFull.photoSrc);

    return (
        <div className={'lg:w-1/2 border-2 border-neutral-300 rounded-lg overflow-hidden'}>
          <Gallery productId={productFull.id} photoNames={photoUrls}/>
        </div>
    );
}

async function takeFiles(photoSrc: string) {
    const fileList = await getAllFilesFromPath(photoSrc);
    const urls = await Promise.all(fileList.map(itemRef => getDownloadURL(itemRef)))

    return urls;
}