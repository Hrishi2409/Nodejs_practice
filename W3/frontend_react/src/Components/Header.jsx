import { Link } from "react-router-dom";

export default function Header(){
    return(
        
        <div>
            <nav style={{display:"flex",justifyContent:"space-between"}}> 
                <span> FishMarket </span>
                <ul>
                    <li>
                        <Link to="/home" style={{textDecorationLine:"none"}}> 
                        Home
                        </Link>
                    </li>
                    <li>
                         <Link to="/about" style={{textDecorationLine:"none"}}>
                        About
                        </Link>
                    </li>
                    <li>
                      <Link to="/contact" style={{textDecorationLine:"none"}}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        
       
        

    )
}