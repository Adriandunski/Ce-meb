'use client'


export default function ShortDescription({description} : {description: string}) {
    return (
        <p className={'font-Jost font-light text-lg tracking-wider'}>
            {description}
        </p>

    );
}