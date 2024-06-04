export default function ContainerWeb({children, idStr, className} : {children: any, idStr: string, className?: string}) {
    return(
        <div id={idStr} className={`3xl:px-60 py-28 xl:px-24 sm:px-10 px-4 ${className}`}>
            {children}
        </div>
    );
}