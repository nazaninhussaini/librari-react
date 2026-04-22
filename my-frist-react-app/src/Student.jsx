import { useContext } from "react";
import { StudentContext } from "./App";

function Student (){
    const list =  useContext(StudentContext)
    return(
        <div className="w-full flex justify-center ">
            <div>
                <h1 className="text-3xl font-medium border p-3 rounded-sm m-4 bg-gray-400 text-stone-100 ">list of all student</h1>
                {list.length > 0 &&(
                <div className="w-full grid gap-y-6">
                    {list.map(x=>(
                        <div className="border flex justify-center flex-col items-center gap-1 rounded-sm bg-gray-500 text-white text-xl py-2 font-normal">
                            <h1>{x.name} {x.lastName}</h1>
                            {x.gender === "female"?`She is in ${x.grade} grade`: `He is in ${x.grade} grade`}

                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}
export default Student;