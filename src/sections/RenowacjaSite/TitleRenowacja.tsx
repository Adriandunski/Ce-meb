import {TypeAnimation} from "react-type-animation";
import InViewApear from "@/components/Animations/InViewApear";
import {useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";

export default function TitleRenowacja() {
    const ref = useRef(null);
    const inView = useInView(ref, {margin: `0px 0px -200px 0px`});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (inView) {
            setOpen(true);
            console.log('aaa')
        }
    }, [inView])

    return (
        <InViewApear directory={'l'}>
            <div className={'h-[5rem]'} ref={ref}>
                {open &&
                    <h2 className={'text-3xl font-Jost font-bold text-neutral-700'}>
                        <TypeAnimation
                            sequence={[
                                'TEST'
                            ]}
                            cursor={false}
                            speed={{type: 'keyStrokeDelayInMs', value: 100}}
                        />
                    </h2>}

            </div>
        </InViewApear>
    );
}

