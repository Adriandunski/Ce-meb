import Carosuel from "@/components/Carosuel/Carosuel";
import OpinionsCard from "@/sections/opinions/OpinionsCard";
import ContainerWeb from "@/components/ContainerWeb";
import InViewApear from "@/components/Animations/InViewApear";
import SumaryOpinions from "@/sections/opinions/SumaryOpinions";

export default function Opinions() {
    const sizes = [{width: 2500, slides: 5, withOfCard: 370},
        {width: 1800, slides: 4, withOfCard: 370},
        {width: 1400, slides: 3, withOfCard: 370},
        {width: 950, slides: 2, withOfCard: 370},
        {width: 640, slides: 1, withOfCard: 500},
        {width: 530, slides: 1, withOfCard: 350},
        {width: 0, slides: 1, withOfCard: 300},
    ];

    return (
        <ContainerWeb idStr={'opinions'} className={'bg-[#F7F2ED]'}>
            <div className={'flex flex-col gap-16'}>
                <div className={'flex flex-col gap-3 items-center text-center'}>
                    <InViewApear directory={'b'}>
                        <h2 className={'text-red-600 font-medium'}>Opinię</h2>

                    </InViewApear>
                    <InViewApear directory={'b'} delay={0.5}>

                        <p className={'text-5xl font-Jost font-bold'}>Co Ludzię <span
                            className={'text-gold'}>Mówią</span> O Nas </p>
                    </InViewApear>
                </div>
                <SumaryOpinions></SumaryOpinions>

                <InViewApear directory={'b'}>
                    <Carosuel breaks={sizes}>
                        {opinions.map(op => <OpinionsCard key={op.id} opinion={op.opinion}></OpinionsCard>)}
                    </Carosuel>
                </InViewApear>
            </div>
        </ContainerWeb>

    );
}

const opinions = [
    {
        id: 0,
        name: "Kacper Lara",
        stars: 5,
        opinion: "Bardzo polecam chłopaków, zamówienie dostosowane pod klienta, super kontakt i finalnie wyszedł świetny produkt."
    },
    {
        id: 1,
        name: "Karol Zębik",
        stars: 5,
        opinion: "Profesjonalnie, starannie, dobrze i z najwyższą jakością, bardzo serdecznie polecam!"
    },
    {
        id: 2,
        name: "Maciek Miłosierny",
        stars: 5,
        opinion: "Polecam! ❤️ Usługi wykonywane bardzo profesjonalnie i dokładnie 😊"
    },
    {
        id: 3,
        name: "Adrian Ceglarz",
        stars: 5,
        opinion: "Bardzo profesjonalne podejście, jakość wykonania na najwyższym poziomie\n" +
            "Z czystym sumieniem mogę polecić tą firmę"
    }
];