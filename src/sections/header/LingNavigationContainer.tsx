export default function LingNavigationContainer({children} : {children: any}) {
    return (
        <div
            className={'flex flex-row items-center justify-center text-neutral-600 hover: gap-2 hover:cursor-pointer hover:bg-gold hover:text-white transition-all px-3 py-1 hover:shadow-md rounded-md'}>
            {children}
        </div>
    );
}