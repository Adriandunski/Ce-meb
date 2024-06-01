import ContainerWeb from "@/components/ContainerWeb";
import ProductList from "@/sections/shopProduct/ProductList";
import InViewApear from "@/components/Animations/InViewApear";

export default function ShopProduct() {

    return (
        <ContainerWeb idStr={'shopProduct'}>
            <div className={'flex flex-col gap-16'}>
                <div
                    className={'flex flex-col gap-y-3 lg:items-start justify-center lg:ml-32 items-center text-center lg:text-left'}>
                    <InViewApear directory={'b'}>
                        <h2 className={'text-red-600 font-medium'}>Produkty</h2>
                    </InViewApear>
                    <InViewApear directory={'b'} delay={0.5}>
                        <p className={'text-5xl font-Jost font-bold'}><span className={'text-gold'}>Poznaj</span> Nasz
                            Asortyment</p>
                    </InViewApear>
                </div>
                <ProductList categoryProd={'Krzesło'}></ProductList>
            </div>
        </ContainerWeb>
    );
}