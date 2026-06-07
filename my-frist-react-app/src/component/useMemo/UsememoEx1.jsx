import { useDeferredValue, useMemo, useState } from "react"

export default function UseMemoEx1 (){
    const [text,setText] = useState("");
    const myText =  useDeferredValue(text);
    const myList = useMemo(()=>{
        const list =[];
        for(let i =0 ;i<20000; i++){
            list.push(<div key={i}>{myText}</div>)
        }
        return list;
    },[myText])
    return(
        <div className="w-full my-3 mx-3">
            <input className="border rounded-md focus:outline-0 py-2 px-2 " type="text" value={text} onChange={(e)=> setText(e.target.value)} />
            <div className="text-xl font-medium">{myList}</div>
        </div>
    )
}