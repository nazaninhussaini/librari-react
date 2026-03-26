import First from "./First";

const Hero = (props)=>{
    return(
        <>
       <img className="w-full h-[500px] items-center mx-auto flex justify-center " 
       
       src="../public/img/p1.jpeg" alt="" />

       <h1 className="text-3xl text-green-500 m-2">{props.text}</h1>
       <h1 className="text-3xl text-green-600">My First code for tailwindcss</h1>
        </>
    )
    
}
export default Hero;