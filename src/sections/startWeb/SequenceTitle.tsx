'use client'

import {TypeAnimation} from "react-type-animation";


export default function SequenceTitle() {
    return (
        <div className={'h-56'}>

            <TypeAnimation className={'text-7xl font-Jost font-bold text-gold'} cursor={false}
                           style={{whiteSpace: 'pre-line'}}
                           sequence={[
                               // Same substring at the start will only be typed once, initially
                               'Lorem ', 800
                           ]}
                           speed={1}
            />
            <TypeAnimation className={'text-7xl font-Jost font-bold'} cursor={false}
                           style={{whiteSpace: 'pre-line'}}
                           sequence={[
                               // Same substring at the start will only be typed once, initially
                               800,
                               `Impsum Jakiś Tekst`,
                           ]}
                           speed={1}
            />
        </div>
    );
}