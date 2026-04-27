// import { Moon } from "lucide-react";

export default function Nav({showForm,setShowForm}){
    return(
        <nav className="w-full bg-linear-90 from-gray-800 to-gray-600 fixed top-0 left-0">
            <div className="w-full flex justify-between p-3 items-center gap-2 text-2xl text-teal-300  shadow-teal-300 ">
                {/* <span className="flex text-center items-center" ><Moon/></span> */}
                <img src="../img/p2.jpg" alt="" className="border w-15 rounded-full h-12 shadow-2xl shadow-teal-300" />
                <h1 className="flex w-full text-center ">Nazanin.Dev</h1>
                <ul className="flex gap-5 mx-5">
                <li>Home</li>
                <li>Mssions</li>
                </ul>
                <button onClick={()=>setShowForm(!showForm)} className="px-3 py-1 border border-teal-400 rounded-sm cursor-pointer">
                    {showForm?"Hide":"Show "}
                </button>
            </div>
        </nav>
    )
}