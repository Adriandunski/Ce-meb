export default function CardCarosuel({widthCard, children}: {widthCard: number, children: any}) {
    return(
        <div style={{width: widthCard}}>
            {children}
        </div>
    );
}