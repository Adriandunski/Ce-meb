import InViewApear from "@/components/Animations/InViewApear";

export default function TitleProduct({title}: { title: string }) {
    return (
        <InViewApear directory={'b'} slideOut={0}>
            <h2 className={'font-AdventPro text-2xl text-white bg-gold inline-block px-3 py-1 rounded-lg'}>
                {title}
            </h2>
        </InViewApear>
    );
}