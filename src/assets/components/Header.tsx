//library import
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <NavLink to='/'>Table</NavLink>
            <NavLink to='SignUp'>Sign Up</NavLink>
        </header>
    )
}

export default Header;