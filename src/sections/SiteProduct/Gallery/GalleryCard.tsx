import Image from "next/image";
import {MouseEventHandler, useRef, useState} from "react";

export default function GalleryCard({fotoId, fotoUrl, switchFoto}: {
    fotoId: number,
    fotoUrl: string,
    switchFoto: any
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [click, setClick] = useState(false);
    const [dragDistance, setDragDistance] = useState( 0);
    const mouseDownRef = useRef(false);
    const startXRef = useRef(0);
    const startYRef = useRef(0);

    const handleMouseDown = (e: any) => {
        mouseDownRef.current = true;
        startXRef.current = e.clientX;
        startYRef.current = e.clientY;
        setIsDragging(false);
        setClick(false);
        setDragDistance(0);
    };

    const handleMouseMove = (e: any) => {
        if (mouseDownRef.current) {
            const dx = e.clientX - startXRef.current;
            if (Math.abs(dx) > 5) { // threshold for considering it as a drag
                setIsDragging(true);
                setDragDistance(dx);
            }
        }
    };

    const handleMouseUp = (e: any) => {
        if (mouseDownRef.current) {
            if (isDragging) {
                setClick(true);
            } else if (!isDragging) {
                switchFoto(fotoId);
            }
            mouseDownRef.current = false;
        }

    };


    return (
        <div className={'h-[100px] flex relative border-2 border-neutral-700'} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}
             >
            <Image src={`/photoProduct/${fotoUrl}`} alt={'Zdjecie'} fill className={'object-cover'} draggable={false}/>
        </div>
    );
}