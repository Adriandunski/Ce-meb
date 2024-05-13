import {useEffect, useState} from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0);

    function windowSizeF() {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', windowSizeF);
        windowSizeF();

        return () => {
            window.removeEventListener('resize', windowSizeF);
        }
    }, []);

    return windowSize;
}