import Slider from "@/components/Slider/Slider";
import TemplateSlider from "@/components/Slider/TemplateSlider";
import {Product} from "@/utils/product/products";



export default function StartWeb() {


    return (
        <Slider>
            <TemplateSlider testTemp={'111'}></TemplateSlider>
            <TemplateSlider testTemp={'222'}></TemplateSlider>
            <TemplateSlider testTemp={'333'}></TemplateSlider>
        </Slider>
        // <div className={'relative'}>
        //     <div className={'flex'}>
        //         <TemplateSlider></TemplateSlider>
        //         <TemplateSlider></TemplateSlider>
        //     </div>
        //
        //     <CarosuelCardStartWeb></CarosuelCardStartWeb>
        //     <div className={'absolute w-full h-full top-0 left-0 flex justify-between px-10 translate-y-1/2'}>
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        //              stroke="currentColor" className="w-12 h-12">
        //             <path strokeLinecap="round" strokeLinejoin="round"
        //                   d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"/>
        //         </svg>
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        //              stroke="currentColor" className="w-12 h-12">
        //             <path strokeLinecap="round" strokeLinejoin="round"
        //                   d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"/>
        //         </svg>
        //
        //     </div>
        // </div>
    );
}