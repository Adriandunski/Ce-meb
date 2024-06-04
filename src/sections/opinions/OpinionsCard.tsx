import Image from "next/image";

export default function OpinionsCard({opinion, stars}: { opinion: any, stars?: number }) {

    return (
        <div className={'flex flex-col rounded-xl bg-[#F8F8F8] py-9 px-6 gap-12 h-full shadow-md'}>
            <div className={'flex flex-col justify-between h-full gap-10'}>
                <div className={'flex flex-col'}>
                    <svg className={'h-8 w-8'} viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.39701 20.0735C0.837362 18.3938 0 16.5098 0 13.4558C0 8.08186 3.72043 3.26523 9.13073 0.883789L10.4829 2.9996C5.43301 5.76951 4.44574 9.36394 4.05204 11.6302C4.86518 11.2034 5.92967 11.0544 6.97297 11.1527C9.70462 11.4091 11.8578 13.6831 11.8578 16.5098C11.8578 17.9351 11.2995 19.302 10.3056 20.3098C9.31167 21.3176 7.96366 21.8838 6.55807 21.8838C5.78076 21.8769 5.01257 21.7133 4.2982 21.4025C3.58383 21.0917 2.93756 20.64 2.39701 20.0735ZM17.5392 20.0735C15.9795 18.3938 15.1422 16.5098 15.1422 13.4558C15.1422 8.08186 18.8626 3.26523 24.2729 0.883789L25.6251 2.9996C20.5752 5.76951 19.5879 9.36394 19.1942 11.6302C20.0073 11.2034 21.0718 11.0544 22.1151 11.1527C24.8468 11.4091 27 13.6831 27 16.5098C27 17.9351 26.4416 19.302 25.4477 20.3098C24.4538 21.3176 23.1058 21.8838 21.7002 21.8838C20.9229 21.8769 20.1547 21.7133 19.4404 21.4025C18.726 21.0917 18.0797 20.64 17.5392 20.0735Z"
                            fill="#E51E23"/>
                    </svg>
                    <p className={'text-neutral-700 font-light tracking-wide leading-7'}>
                        {opinion.opinion}
                    </p>
                </div>

                <div className={'flex flex-col gap-6'}>
                    <div className={'flex gap-1'}>
                        <svg className={'w-7 h-7 fill-gold'} viewBox="0 0 22 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0577 7.84942L14.611 6.91251L11.7291 1.07013C11.6504 0.910166 11.5209 0.780673 11.361 0.701963C10.9598 0.503916 10.4723 0.668955 10.2717 1.07013L7.38988 6.91251L0.943202 7.84942C0.765468 7.87481 0.602968 7.9586 0.478554 8.08555C0.328144 8.24015 0.245262 8.44813 0.248118 8.66381C0.250975 8.87948 0.339337 9.08519 0.493788 9.23575L5.15805 13.7832L4.05609 20.2045C4.03025 20.3539 4.04678 20.5075 4.10381 20.648C4.16083 20.7884 4.25607 20.9101 4.37873 20.9992C4.50138 21.0882 4.64654 21.1412 4.79775 21.152C4.94896 21.1627 5.10016 21.1309 5.23422 21.0602L11.0004 18.0285L16.7666 21.0602C16.9241 21.144 17.1069 21.1719 17.2821 21.1414C17.7239 21.0652 18.0209 20.6463 17.9448 20.2045L16.8428 13.7832L21.5071 9.23575C21.634 9.11134 21.7178 8.94884 21.7432 8.7711C21.8118 8.32677 21.502 7.91544 21.0577 7.84942Z"
                            />
                        </svg>
                        <svg className={'w-7 h-7 fill-gold'} viewBox="0 0 22 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0577 7.84942L14.611 6.91251L11.7291 1.07013C11.6504 0.910166 11.5209 0.780673 11.361 0.701963C10.9598 0.503916 10.4723 0.668955 10.2717 1.07013L7.38988 6.91251L0.943202 7.84942C0.765468 7.87481 0.602968 7.9586 0.478554 8.08555C0.328144 8.24015 0.245262 8.44813 0.248118 8.66381C0.250975 8.87948 0.339337 9.08519 0.493788 9.23575L5.15805 13.7832L4.05609 20.2045C4.03025 20.3539 4.04678 20.5075 4.10381 20.648C4.16083 20.7884 4.25607 20.9101 4.37873 20.9992C4.50138 21.0882 4.64654 21.1412 4.79775 21.152C4.94896 21.1627 5.10016 21.1309 5.23422 21.0602L11.0004 18.0285L16.7666 21.0602C16.9241 21.144 17.1069 21.1719 17.2821 21.1414C17.7239 21.0652 18.0209 20.6463 17.9448 20.2045L16.8428 13.7832L21.5071 9.23575C21.634 9.11134 21.7178 8.94884 21.7432 8.7711C21.8118 8.32677 21.502 7.91544 21.0577 7.84942Z"
                            />
                        </svg>
                        <svg className={'w-7 h-7 fill-gold'} viewBox="0 0 22 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0577 7.84942L14.611 6.91251L11.7291 1.07013C11.6504 0.910166 11.5209 0.780673 11.361 0.701963C10.9598 0.503916 10.4723 0.668955 10.2717 1.07013L7.38988 6.91251L0.943202 7.84942C0.765468 7.87481 0.602968 7.9586 0.478554 8.08555C0.328144 8.24015 0.245262 8.44813 0.248118 8.66381C0.250975 8.87948 0.339337 9.08519 0.493788 9.23575L5.15805 13.7832L4.05609 20.2045C4.03025 20.3539 4.04678 20.5075 4.10381 20.648C4.16083 20.7884 4.25607 20.9101 4.37873 20.9992C4.50138 21.0882 4.64654 21.1412 4.79775 21.152C4.94896 21.1627 5.10016 21.1309 5.23422 21.0602L11.0004 18.0285L16.7666 21.0602C16.9241 21.144 17.1069 21.1719 17.2821 21.1414C17.7239 21.0652 18.0209 20.6463 17.9448 20.2045L16.8428 13.7832L21.5071 9.23575C21.634 9.11134 21.7178 8.94884 21.7432 8.7711C21.8118 8.32677 21.502 7.91544 21.0577 7.84942Z"
                            />
                        </svg>
                        <svg className={'w-7 h-7 fill-gold'} viewBox="0 0 22 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0577 7.84942L14.611 6.91251L11.7291 1.07013C11.6504 0.910166 11.5209 0.780673 11.361 0.701963C10.9598 0.503916 10.4723 0.668955 10.2717 1.07013L7.38988 6.91251L0.943202 7.84942C0.765468 7.87481 0.602968 7.9586 0.478554 8.08555C0.328144 8.24015 0.245262 8.44813 0.248118 8.66381C0.250975 8.87948 0.339337 9.08519 0.493788 9.23575L5.15805 13.7832L4.05609 20.2045C4.03025 20.3539 4.04678 20.5075 4.10381 20.648C4.16083 20.7884 4.25607 20.9101 4.37873 20.9992C4.50138 21.0882 4.64654 21.1412 4.79775 21.152C4.94896 21.1627 5.10016 21.1309 5.23422 21.0602L11.0004 18.0285L16.7666 21.0602C16.9241 21.144 17.1069 21.1719 17.2821 21.1414C17.7239 21.0652 18.0209 20.6463 17.9448 20.2045L16.8428 13.7832L21.5071 9.23575C21.634 9.11134 21.7178 8.94884 21.7432 8.7711C21.8118 8.32677 21.502 7.91544 21.0577 7.84942Z"
                            />
                        </svg>
                        <svg className={'w-7 h-7 fill-gold'} viewBox="0 0 22 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0577 7.84942L14.611 6.91251L11.7291 1.07013C11.6504 0.910166 11.5209 0.780673 11.361 0.701963C10.9598 0.503916 10.4723 0.668955 10.2717 1.07013L7.38988 6.91251L0.943202 7.84942C0.765468 7.87481 0.602968 7.9586 0.478554 8.08555C0.328144 8.24015 0.245262 8.44813 0.248118 8.66381C0.250975 8.87948 0.339337 9.08519 0.493788 9.23575L5.15805 13.7832L4.05609 20.2045C4.03025 20.3539 4.04678 20.5075 4.10381 20.648C4.16083 20.7884 4.25607 20.9101 4.37873 20.9992C4.50138 21.0882 4.64654 21.1412 4.79775 21.152C4.94896 21.1627 5.10016 21.1309 5.23422 21.0602L11.0004 18.0285L16.7666 21.0602C16.9241 21.144 17.1069 21.1719 17.2821 21.1414C17.7239 21.0652 18.0209 20.6463 17.9448 20.2045L16.8428 13.7832L21.5071 9.23575C21.634 9.11134 21.7178 8.94884 21.7432 8.7711C21.8118 8.32677 21.502 7.91544 21.0577 7.84942Z"
                            />
                        </svg>
                    </div>

                    <div className={'flex items-center gap-5'}>
                        <div className={'bg-[#99B0A7] rounded-full w-20 h-20 relative'}>
                            <Image src={opinion.srcPhoto} alt={'opiniaTwarz'} fill objectFit={'cover'}/>
                        </div>
                        <p className={'text-lg text-neutral-700 font-medium tracking-wider'}>{opinion.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}