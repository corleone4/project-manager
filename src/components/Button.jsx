export default function Button({children, extraClasses, ...props}){
    return <button {...props} className={`${extraClasses} px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-300 hover:bg-stone-900 hover:text-stone-100`}>{children}</button>;
}