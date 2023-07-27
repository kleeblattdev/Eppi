//library import
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <nav className="flex justify-end gap-4 mb-4">
                <NavLink to='/' className="p-2 text-gray-500 hover:text-black hover:underline">Table</NavLink>
                <NavLink to='SignUp' className="p-2 text-gray-500 hover:text-black hover:underline">Sign Up</NavLink>
            </nav>
        </header>
    )
}

export default Header;