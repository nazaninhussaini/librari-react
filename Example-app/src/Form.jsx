import { useState } from "react";

function CreatForm ({list ,setList,showForm,setShowForm}){
    const [qimat,setQimat] = useState("");
    function click(){
    if(qimat.trim().length > 0){
        const Todo = {
            id:Date.now(),
            todo : qimat,
            completaed : false,
            date : new Date().toLocaleTimeString(),

        }
        setList((prev)=>[...prev,Todo]);
        setQimat("");
        setShowForm (false);
    }}
   { 
    if(showForm){
    return(
        
        <div className="w-full flex justify-center items-center h-screen text-teal-300 ">
            <div className="w-1/2 border flex flex-col gap-3 border-teal-400 p-5 shadow-md rounded-md shadow-teal-700">
            <h1 className="text-center text-3xl font-medium p-1 text-teal-300">List Work</h1>
                <input value={qimat} onChange={(e)=>setQimat(e.target.value)} placeholder="Add Works for Daily" type="text" 
                 className="border border-teal-300 shadow-md focus:shadow-teal-600 p-2 focus:outline-0 cursor-text" />
                <button onClick={click} className="border p-1.5 text-2xl font-medium shadow-sm shadow-teal-300">Save</button>
            </div>
        </div>
      )}
}
}
export default CreatForm;