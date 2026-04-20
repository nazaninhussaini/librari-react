import { Link } from "react-router-dom";

const Navbar = ()=>{
    const navList = [
        {
        text :"Home",
        link :"/"
    },
        {
        text :"About",
        link :"/about"
    },
        {
        text :"Contact",
        link :"/contact"
    },
        {
        text :"Services",
        link :"/services"
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
                        <Link style={{textDecoration : "none",
                            color:"white",
                        }} to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
    
} 
export default Navbar;