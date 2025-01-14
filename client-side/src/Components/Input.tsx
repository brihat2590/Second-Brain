interface InputProps{
    onChange?:()=>void,
    placeholder:any,
    reference?:any
}

export function Input({placeholder,reference,onChange}:InputProps)
{
    return(
        <div>
            <input type="text" ref={reference} className="px-4 py-2 border rounded m-2" onChange={onChange} placeholder={placeholder}></input>
            

        </div>
    )
}