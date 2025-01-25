import { Link } from "react-router"

const Navbar = ()=>{
    return(
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/docs'>Documentation Helper</Link>
            <Link to='/api'>API Explorer</Link>
            <Link to='/history'>Query History</Link>
            <Link to='/settings'>Settings</Link>
        </nav>
    )
}
export default Navbar;