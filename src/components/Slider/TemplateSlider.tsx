export default function TemplateSlider({testTemp} : {testTemp: string}) {
    return(
        <div className={'basis-full shrink-0 flex h-[620px] bg-[#F7F2ED] py-[120px] px-[135px] gap-10'}>
            {testTemp}
        </div>
    );
}