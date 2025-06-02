export default function Input({ref, title, textarea, ...props}){
    return <p className="px-2 flex flex-col">
        <label className="mb-8 text-stone-900 md:text-xl">{title}</label>
        {textarea ? <textarea ref={ref} {...props}></textarea>: <input ref={ref}  {...props}/>}
    </p>
}