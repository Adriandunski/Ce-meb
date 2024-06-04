import ContainerWeb from "@/components/ContainerWeb";
import ContactUs from "@/sections/contactUs/ContactUs";
import {Product} from "@/utils/product/products";
import ShortDescription from "@/sections/SiteProduct/ShortDescription";
import MeasureProduct from "@/sections/SiteProduct/MeasureProduct/MeasureProduct";
import TitleProduct from "@/sections/SiteProduct/TitleProduct";
import ProductNameAndPrice from "@/sections/SiteProduct/ProductNameAndPrice";
import InViewApear from "@/components/Animations/InViewApear";
import GallerySection from "@/sections/SiteProduct/Gallery/GallerySection";
import {redirect} from "next/navigation";

export default async function ProductDescription({params}: { params: { productId: string } }) {

    const productFull = await getProductById(Number(params.productId[1]));

    return (
        <div>
            <ContainerWeb idStr={'top'} className={'mt-0 bg-[#F7F2ED]'}>
                <div className={'flex lg:flex-row flex-col-reverse gap-10'}>
                    <GallerySection productFull={productFull}/>
                    <div className={'basis-1/2 shrink-0 flex flex-col pr-5'}>
                        <div className={'flex flex-col gap-10'}>
                            <ProductNameAndPrice productFull={productFull}/>
                            <div className={'flex flex-col gap-5'}>
                                <div>
                                    <TitleProduct title={'Krótki opis:'}/>
                                </div>
                                <InViewApear directory={'b'}>
                                    <ShortDescription></ShortDescription>
                                </InViewApear>
                            </div>
                            <div className={'flex flex-row gap-10'}>
                                <MeasureProduct productFull={productFull}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={'bg-neutral-400 h-1 mt-7 rounded-full'}></div>

            </ContainerWeb>
            <ContactUs></ContactUs>
        </div>
    );
}

async function getProductById(query: number) {
    const res = await fetch(`http://localhost:3000/products/getProductById?id=${query}`, {cache: 'no-cache'});

    if (res.ok) {
        const dataJson: Product = await res.json();
        return dataJson;
    } else {
        redirect('/');
    }
}