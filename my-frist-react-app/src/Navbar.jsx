import Hero from "./Hero";

const Navbar = ()=>{
    const navList = [
        {
        text :"Home",
        href :"/home"
    },
        {
        text :"About",
        href :"/about"
    },
        {
        text :"Contact",
        href :"/contact"
    },
        {
        text :"Services",
        href :"/services"
    },
]
  
    return(
        <nav style={{     width : "100%",
        padding: "8px 12px",
        backgroundColor: "green",
        display : "flex",
        justifyContent: "space-between",
        color:"white",
        marginBottom: "6px"
        
        }}>
            <h1 className="text-4xl font-bold">Me Appliction</h1>
            <ul style={{ display : "flex",
        gap : "10px",
        alignItems : "center"}}>
                {navList.map((item)=>(
                    <li className="text-2xl font-medium" style={{listStyleType : "none"}} key={item.href}>
                        <a style={{textDecoration : "none",
                            color:"white",
                        }} href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
    
} 
export default Navbar;