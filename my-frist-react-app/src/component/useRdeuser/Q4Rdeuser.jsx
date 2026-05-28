import { useEffect, useReducer, useState } from "react"

 const products =[
    {
        name:"Apple PC",
        price :20000
    },
    {
        name:"HP PC",
        price :13000
    },
    {
        name:"Dell PC",
        price :18000
    }
 ]

export default function Q4Rdeuser (){
    const [totalPrice,setTotalPrice]= useState(0);
    const [qimat,setQimat]= useState(0);
    const [name,setName] = useState("");
    const[deta,action] = useReducer(myfunc,products);
 
    useEffect(()=>{
    setTotalPrice( deta.reduce((total,y)=>{
        return total+=y.price
     },0),
    );
    },[deta])
    function handelClick(){
        action({payload : {name:name , price:qimat}})
    }
    
    return(
        <div className="w-full bg-gray-500 mx-auto">
            <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="border-white shadow-2xl bg-gray-400 text-stone-200 focus:outline-0 mx-2 py-4 px-3 my-4" type="text" placeholder="Enther the prodecat name" />
            <input 
            value={qimat}
            onChange={(e) => setQimat(Number(e.target.value))}
            className="border-white shadow-2xl bg-gray-400 text-stone-200 focus:outline-0 mx-2 py-4 px-3 my-4" type="number" placeholder="Enther the price" />
            <button
            onClick={handelClick}
            className="py-4 px-5 text-stone-200 rounded-md shadow-2xl bg-linear-60 from-gray-500 to-taupe-300 ">Save</button>
            <div className="p-3 grid grid-cols-3 gap-5">
                {deta.map((y ,index)=>(
                    <div key={index} className="p-5 border-white shadow-2xl bg-gray-400 rounded-md">
                        <h1 className="text-stone-200">{y.name}</h1>
                        <p className={`text-sm pt-3 ${y.price<15000 ? "text-green-800" : "text-red-600"}`}> {y.price} AFG</p>
                    </div>
                ))}
            </div>
            <h1 className="text-4xl text-center font-bold text-stone-200"> total price : {totalPrice}</h1>
        </div>
    )

}
function myfunc(deta,action){
    return [...deta , action.payload ]
  
}