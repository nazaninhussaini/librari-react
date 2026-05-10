// import Student from "./Student";

// export default function Home(){
//     return(
//         <div>
//         <h1 className="w-fit h-fit text-2xl bg-fuchsia-600 text-transparent bg-clip-text"></h1>
//         <Student/>
//         </div>
//     )
// }import { useReducer, useRef, useState } from "react";
// const intialValue = { count:0 };

// function App(){

// function reducer (state,action){
//   switch(action.type){
//     case "increament":
//     return{count: state.count + action.payload }
//     default :
//      return{count: state.count -  action.payload }
//   }
// }
// function handelIncreament (){
//   Ref.current ++;
// }
// function handelDecrement(){
//   Ref.current -- ;
// }

//   const Ref =  useRef (0);
//   const [state,func] = useReducer(reducer,intialValue);
//   const [value,setValue] = useState(0);
//   return(
//   <div className="w-full flex justify-center flex-col items-center gap-4 py-3  ">
//     <h1 className="text-center text-3xl bg-linear-60 from-amber-500 to-red-500 text-transparent bg-clip-text">Counter with useReducer</h1>
//       <div className="flex w-40 justify-center gap-3 flex-col">
//       <button 
//       className=" rounded-sm p-2 font-normal text-xl text-stone-100 bg-linear-60 from-amber-400 to-red-500 "
//       onClick={()=>func({type:"increament" ,payload: 2})}>Increament</button>
//       <h1 className="text-center text-xl text-amber-500">{ state.count }</h1>
//       <button className=" text-xl font-normal bg-linear-60 from-amber-400 to-red-500 text-stone-100 rounded-sm p-2 "
//        onClick={()=>func({type :"decrement" ,payload : 2})}>Decreament</button>
//       {/* <button className=" text-xl font-normal bg-linear-60 from-amber-400 to-red-500 text-stone-100 rounded-sm p-2 "
//        onClick={()=>func({type :"delete"})}>Reset</button> */}
//       </div>
//       <div className="w-full flex items-center flex-col gap-4 p-2">
//         <h1 className="text-center text-3xl bg-linear-60 from-blue-500 to-purple-500 text-transparent bg-clip-text">Counter with useState</h1>
//         <button className="text-xl font-normal bg-linear-60 from-blue-500 to-purple-500 w-40 text-stone-100 rounded-sm p-2"
//         onClick={()=> setValue (value + 1)}
//         >Increament</button>
//         <h1 className="text-center text-xl text-blue-500">{value}</h1>
//         <button className="text-xl font-normal bg-linear-60 from-blue-500 to-purple-500 w-40 text-stone-100 rounded-sm p-2"
//         onClick={()=> setValue (value - 1)}>Decreament</button>
//       </div>
//       <div className="w-full flex items-center flex-col gap-4 p-2">
//         <h1 className="text-center text-3xl bg-linear-60 from-green-600 to-orange-400  text-transparent bg-clip-text"
//         >Counter with useRef</h1>
//         <button  className="text-xl font-normal bg-linear-60 from-green-600 to-orange-400 w-40 text-stone-100 rounded-sm p-2"
//         onClick={handelIncreament}
//         >Increament</button>
//         <h1 className="text-center text-xl text-blue-500">{Ref.current}</h1>
//         <button className="text-xl font-normal bg-linear-60 from-green-600  to-orange-400 w-40 text-stone-100 rounded-sm p-2"
//          onClick={handelDecrement}
//         >Decreament</button>
//       </div>

//     </div>
//   )
// }
// export default App;