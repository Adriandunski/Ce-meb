'use client'
import {useEffect, useState} from "react";

export default function CookiesFooter() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        readCookie().then(x => {
            if (x === 'none') {
                setShow(true);
            }
        });
    }, []);

    function handleClickAgree() {
        createCookie().then(x => setShow(false));
    }

    return (
        <>
            {show &&
                <div className={'flex justify-center fixed bottom-10 z-10 w-full'}>
                    <div
                        className={'flex justify-between bg-neutral-100 items-center gap-16 p-4 rounded-md shadow-2xl'}>
                        <p className={'text-xs font-extralight text-neutral-700 max-w-[550px]'}>Strona korzysta z plików
                            cookies w celu realizacji usług zgodnie z Polityką prywatności. Możesz określić warunki
                            przechowywania lub dostępu mechanizmu cookie klikając w przycisk ustawień.</p>
                        <div className={'flex gap-3'}>
                            <button onClick={readCookie}
                                    className={'px-4 py-2 rounded-md bg-neutral-300 text-neutral-900'}>Ustawienia
                            </button>
                            <button onClick={handleClickAgree}
                                    className={'bg-gold text-white px-4 py-2 rounded-md'}>Akceptuje
                            </button>
                        </div>
                    </div>
                </div>}
        </>
    );
}


async function createCookie() {
    const res = await fetch(`http://localhost:3000/cookies/createAccessCookie`, {cache: 'no-cache'});
    const data = await res.json();
}

async function readCookie() {
    const res = await fetch(`http://localhost:3000/cookies/readAccesCookie`, {cache: 'no-cache'});
    const data = await res.json();

    return data;
}
