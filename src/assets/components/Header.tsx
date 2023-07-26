//library import
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <nav className="flex justify-around m-2">
                <NavLink to='/' className="text-gray-500 hover:text-black hover:underline">Table</NavLink>
                <NavLink to='SignUp' className="text-gray-500 hover:text-black hover:underline">Sign Up</NavLink>
            </nav>
        </header>
    )
}

export default Header;