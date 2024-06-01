export default function CardCarosuel({widthCard, children}: {widthCard: number, children: any}) {
    return(
        <div className={''} style={{width: widthCard}}>
            {children}
        </div>
    );
}