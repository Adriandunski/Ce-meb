import ContactUs from "@/sections/contactUs/ContactUs";
import Service from "@/sections/services/Service";
import AboutUs from "@/sections/aboutUs/AboutUs";
import ShopProduct from "@/sections/shopProduct/ShopProduct";
import StartWeb from "@/sections/startWeb/StartWeb";
import Opinions from "@/sections/opinions/Opinions";
import CookiesFooter from "@/components/CookiesFooter/CookiesFooter";

export default function Home() {
    return (
        <main className="">
            <StartWeb></StartWeb>
            <Service></Service>
            <AboutUs></AboutUs>
            <ShopProduct></ShopProduct>
            <Opinions></Opinions>
            <ContactUs></ContactUs>
            <CookiesFooter></CookiesFooter>
        </main>
    );
}
