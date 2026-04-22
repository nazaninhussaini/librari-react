import { Moon } from "lucide-react";

export default function Nav(){
    return(
        <div className="w-full h-16 bg-linear-90 from-gray-800 to-gray-600 fixed">
            <div className="w-full flex justify-between p-3 items-center gap-2 text-2xl text-teal-300  shadow-teal-300 ">
                {/* <span className="flex text-center items-center" ><Moon/></span> */}
                <img src="" alt="" className="border w-14 rounded-full h-12 shadow-2xl shadow-teal-300" />
                <h1 className="flex w-full text-center ">Nazanin.Dev</h1>
                <ul className="flex gap-3">
                <li>Home</li>
                <li>Crew</li>
                <li>Missons</li>
                </ul>
            </div>
        </div>
    )
}