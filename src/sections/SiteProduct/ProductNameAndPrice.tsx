'use client'
import {TypeAnimation} from "react-type-animation";
import {Product} from "@/utils/product/products";
import InViewApear from "@/components/Animations/InViewApear";

export default function ProductNameAndPrice({productFull} : {productFull: Product}) {
    return (
        <div className={'h-[110px] flex flex-col justify-between'}>
            <h2 className={'text-3xl font-Jost font-bold text-neutral-700'}>
                <TypeAnimation
                    sequence={[
                        productFull.name
                    ]}
                    cursor={false}
                    speed={{type: 'keyStrokeDelayInMs', value: 30}}
                />
            </h2>
            <InViewApear directory={'t'} delay={2}>
                <p className={'font-Jost text-3xl font-semibold text-[#C2554F]'}>{productFull.price.toFixed(2)} zł <span
                    className={'text-sm font-light'}>brutto</span></p>
            </InViewApear>
        </div>
    );
}