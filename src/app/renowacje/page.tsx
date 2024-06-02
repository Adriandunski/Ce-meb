import ContainerWeb from "@/components/ContainerWeb";
import ContactUs from "@/sections/contactUs/ContactUs";
import InViewApear from "@/components/Animations/InViewApear";
import RenowacjaCard from "@/sections/RenowacjaSite/RenowacjaCard";


export default function Renowacje() {
    return (
        <div>
            <ContainerWeb idStr={'top'} className={'mt-0 bg-[#F7F2ED]'}>
                <InViewApear directory={'b'} offset={250}>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-red-600 font-medium'}>Renowacje</h2>
                        <p className={'text-5xl font-Jost font-bold'}>Zobacz <span
                            className={'text-gold'}>Nasze</span> Możliwości
                        </p>
                    </div>
                </InViewApear>
                <div className={'flex gap-20 flex-col mt-10'}>

                    <RenowacjaCard/>
                    <RenowacjaCard/>
                    <RenowacjaCard/>
                    <RenowacjaCard/>



                </div>

            </ContainerWeb>
            <ContactUs></ContactUs>
        </div>
    );
}
