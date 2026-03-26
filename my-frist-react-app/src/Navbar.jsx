const Navbar = ()=>{
    const navStyle ={
        with : "100%",
        padding: "8px 12px",
        backgroundImage: "liner-greadint (green,greenyellow)",
        disply : "flex",
        justifyContent: "space-between",
        color: "with",
    }
    const ulStyle = {
        disply : "flex",
        gap : "10px",
        alignItems : "center",
    }
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
        text :"Concat",
        href :"/concat"
    },
        {
        text :"Services",
        href :"/services"
    },
]
  
    return(
        <nav style={navStyle}>
            <h1>Me Appliction</h1>
            <ul style={ulStyle}>
                {navList.map((item)=>(
                    <li style={{listStyleType : "none"}} key={item.href}>
                        <a style={{textDecoration : "none",
                            color:"black",
                        }} href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
} 
export default Navbar;