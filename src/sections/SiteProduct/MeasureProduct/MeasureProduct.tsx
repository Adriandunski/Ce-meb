import MeasureOption from "@/sections/SiteProduct/MeasureProduct/MeasureOption";
import {Product} from "@/utils/product/products";
import TitleProduct from "@/sections/SiteProduct/TitleProduct";
import InViewApear from "@/components/Animations/InViewApear";

export default function MeasureProduct({productFull}: { productFull: Product }) {
    return (
        <div className={'flex flex-col gap-5 items-start'}>
            <TitleProduct title={'Wymiary produktu:'}/>

            <div className={'inline-block text-neutral-700'}>
                <div className={'flex flex-col gap-2'}>
                    {productFull.measure.map((value, index) =>
                        <InViewApear directory={'b'} key={index} offset={0} delay={0.2 * index}>
                            <MeasureOption  keyString={value[0]}
                                           value={value[1]}></MeasureOption>
                        </InViewApear>
                    )}
                </div>
            </div>
        </div>
    );
}