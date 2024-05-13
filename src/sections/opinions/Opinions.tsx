import Carosuel from "@/components/Carosuel/Carosuel";
import OpinionsCard from "@/sections/opinions/OpinionsCard";
import ContainerWeb from "@/components/ContainerWeb";

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
        <ContainerWeb idStr={'opinions'}>
            <div className={'flex flex-col gap-16'}>
                <div className={'flex flex-col gap-3 items-center text-center'}>
                    <h2 className={'text-red-600 font-medium'}>Opinię</h2>
                    <p className={'text-5xl font-Jost font-bold'}>Co Ludzię <span
                        className={'text-gold'}>Mówią</span> O Nas </p>
                </div>
                <Carosuel breaks={sizes}>
                    <OpinionsCard></OpinionsCard>
                    <OpinionsCard></OpinionsCard>
                    <OpinionsCard></OpinionsCard>
                    <OpinionsCard></OpinionsCard>
                    <OpinionsCard></OpinionsCard>
                    <OpinionsCard></OpinionsCard>
                    <OpinionsCard></OpinionsCard>
                </Carosuel>
            </div>
        </ContainerWeb>

    );
}